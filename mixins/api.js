  /**
 * Mixin to send requests to backend part use
 */
import { serialize } from 'object-to-formdata';


export default {
    data() {
        return {
            multipartFormData: false,
            cacheRoutes: ['get-entity', 'get-entities', 'get-container', 'get-containers', 'get-client-container', 'testimonials/get-random', 'get-team', 'get-recent-programs', 'get-news'],
        }
    },
    computed: {
        tenantId() {
            return this.$store.state.initializedId;
        },
        authData() {
            return this.$store.state.authData;
        },
        cachedContent() {
          return this.$store.state.cachedContent;
        },
    },
    beforeDestroy() {
      this.$store.commit("resetValidation");
    },
  methods: {

        async post(url, formData, callBackFn = null) {
            this.$store.commit("resetValidation");

            formData = serialize(
                formData,
                {
                    nullsAsUndefineds: true,
                    booleansAsIntegers: true
                }
            );
            return this.$axios.post(url, formData, this.getHeaders())
                .then(({ data }) => {
                    return callBackFn === null ? data.data : callBackFn(data.data);
                }).catch(async (e) => {
                    this.handleError(e)
                    console.log("Caught ERR on POST request");
                })
        },
        async get(url, callBackFn = null) {
            let isShouldBeCached = false;
            if(this.cacheRoutes.some(word => {
              return url.includes(word);
            })){
              isShouldBeCached = true;
              const content = this.cachedContent.find((page)=>page.url===url);
              if(content){
                return content.data;
              }
            }

            return this.$axios.get(url, this.getHeaders()).then(({ data }) => {
                const responseData = (data.links ? data : data.data);
                if(isShouldBeCached){
                  this.$store.commit("addCachedContent", {
                      data: responseData,
                      url: url
                  })
                }
                return callBackFn === null ? responseData : callBackFn(responseData);
            }).catch(async (e) => {
                //SHOW ERR
            })
        },
        getHeaders() {
          if (this.tenantId) {
            this.$axios.setHeader("X-Client", this.tenantId);
          }
            const requestHeaders = {
                timeout: 60000,
                headers: {
                    "Content-Type": this.multipartFormData ? "multipart/form-data" : "application/json",
                },
            };
            if (this.authData.token !== null) {
                requestHeaders.headers["Authorization"] = `Bearer ${this.authData.accessToken}`;
            }
            return requestHeaders;
        },
        handleError(e) {
            if (e.response) {
                if (e.response.status === 422) {
                    this.$store.commit("setErrors", e.response.data.errors);
                    this.$store.commit("setFieldNames", Object.keys(e.response.data.errors))
                }
                if (e.response.status === 404) {
                    this.$router.push("/404");
                }
                return false;
            } else {
                return true;
            }
        }
    },
};
