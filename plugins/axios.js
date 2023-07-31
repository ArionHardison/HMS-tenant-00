export default ({$axios, store, app}) => {
  $axios.onRequest(request => {
    if (process.client) {
      store.commit("startAxiosCall");
    }
    return request;
  })

  $axios.onResponse(response => {
    if (process.client) {
      store.commit("stopAxiosCall")
    }
    return response
  })

  $axios.onError(async error => {
    if (process.client) {
      store.commit("stopAxiosCall")
    }
    if (error.response?.status === 422) {
      store.commit("setErrors", error.response.data.errors);
      store.commit(
        "setFieldNames",
        Object.keys(error.response.data.errors)
      );
    }

    if (error.response.status === 503) {
      const maintenance = await $axios.get("maintenance");
      const redirectURL = maintenance.data.data.redirect;
      const urlReg = new RegExp('^(?:[a-z+]+:)?//', 'i');

      if (urlReg.test(redirectURL) && process.client) {
        window.location.href = redirectURL;
      } else {
        await app.router.push(redirectURL);
      }


    }

    return error
  });

};
