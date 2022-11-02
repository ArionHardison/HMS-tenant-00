export default ({ $axios, store, app}) => {
  $axios.onRequest(request => {
     if(process.client) {
       store.commit("api/startAxiosCall");
     }
    return request;
  })

  $axios.onResponse(response => {
    if(process.client) {
      store.commit("api/stopAxiosCall")
    }
    return response
  })

  $axios.onError(error => {
    if(process.client) {
      store.commit("api/stopAxiosCall")
    }
    if (error.response?.status === 422) {
      store.commit("setErrors", error.response.data.errors);
      store.commit(
        "setFieldNames",
        Object.keys(error.response.data.errors)
      );
    }

    if (error.response.status === 503) {
      app.router.push("/maintenance");

    }

    return error
  });

};
