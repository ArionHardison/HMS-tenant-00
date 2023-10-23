<template>
  <div id="contacts">
    <Loading />

    <Header logoColor="dark" />

    <main id="main" class="site-main">
      <template v-if="contactContainer">
          <PageTitle :container="{formTitle: 'Contacts'}"/>
      </template>
      <div id="page-content" class="spacer p-top-xl">
        <div class="wrapper">
          <div class="content">
            <div class="clearfix">
              <template v-if="gmapsContainer">
                  <GoogleMaps :container-data="gmapsContainer"/>
              </template>
              <div class="spacer p-top-xl">
                <div class="title">
                  <template v-if="contactContainer">
                    <h2>{{contactContainer.formTitle}}</h2>
                    <div v-html="contactContainer.formDescription"></div>
                  </template>
                </div>

                <div class="row gutter-width-sm with-pb-xl spacer p-top-lg">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="contact-form-shortcode">
                      <template v-if="contactContainer">
                        <ContactsForm :container="contactContainer"/>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading/Loading";
import Header from "~/components/blocks/header/Header";
import Footer from "~/components/blocks/footer/Footer";

import PageTitle from "~/components/blocks/contacts/PageTitle";
import GoogleMaps from "~/components/blocks/contacts/GoogleMaps";
import ContactsForm from "~/components/Forms/ContactsForm";

export default {
  components: {
    Loading,
    Header,
    PageTitle,
    ContactsForm,
    GoogleMaps,
    Footer,
  },
  mounted: function () {
    if (process.client) {
      document.body.classList.add("page");
    }
  },
  data(){
    return {
      contactContainer: null,
      gmapsContainer: null,
    }
  },
  async beforeMount() {
    const container = await this.get("public/get-container/contactFormHeader");
    const gmapsContainer = await this.get("public/get-container/gmaps");
    if(gmapsContainer){
      if(Object.keys(gmapsContainer).length){
        this.gmapsContainer = gmapsContainer;
      }
    }
    if(container) {
      if(Object.keys(container).length){
        this.contactContainer = container;
      }else{
        await this.$router.push("/");
      }
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.body.classList.remove("page");
    }
  },
  metaInfo: {
    title: "Contacts | Bona - Health & Medical Vue JS Template",
    titleTemplate: "%s",
  },
};
</script>
