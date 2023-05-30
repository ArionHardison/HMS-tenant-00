import slugify from "slugify";
export default ({ app, store }, inject) => {
  inject('imageUrl', (fileName, size="sm", tenant=true)=>{
     return `https://web.codifyhealthcare.com/public/files/${size}/${fileName}${tenant ? '/'+store.state.tenant.id : ''}`;
  })
  inject('slug', (id, string)=>{
     return slugify(`${id}-${string.toLowerCase()}`, "-");
  })

  inject('getId', (queryParam)=>{
    return queryParam ? [...queryParam.split("-")].shift() : 0;
  })
}
