import slugify from "slugify";
export default ({ app, store }, inject) => {
  inject("imageUrl", (fileName, size = "sm", tenant = true) => {
    const url =
      process.env.NODE_ENV === "development"
        ? process.env.SOCIAL_URL_DEV
        : "https://web.codifyhealthcare.com";
    return `${url}/public/files/${size}/${fileName}${
      tenant ? "/" + store.state.initializedId : ""
    }`;
  })

  inject('slug', (id, string)=>{
     return slugify(`${id}-${string.toLowerCase()}`, "-");
  })

  inject('getId', (queryParam)=>{
    return queryParam ? [...queryParam.split("-")].shift() : 0;
  })
}
