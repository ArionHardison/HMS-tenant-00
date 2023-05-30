import Vue from "vue";

Vue.directive("src-tenant", (el, binding) => {
  const { name, size, type } = binding.value;
  const fullPath = `path=${size}/${name}.${type}`;
  el.src = binding.value
    ? `https://web.codifyhealthcare.com/public/files?${fullPath}`
    : "img/default.png";
});

Vue.directive("href-tenant", (el, binding) => {
  const { name, size, type } = binding.value;
  const fullPath = `path=${size}/${name}.${type}`;
  el.href = `https://web.codifyhealthcare.com/public/files?${fullPath}`;
});

Vue.directive("bg-img-tenant", (el, binding) => {
  const { name, size, type } = binding.value;
  const fullPath = `path=${size}/${name}.${type}`;

  el.style.backgroundImage = binding.value
    ? `url(https://codify.solutions/public/files?${fullPath})`
    : "img/default.png";
  el.style.backgroundPosition = "center";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "cover";
});

export default ({ app , store }, inject) => {
  inject('formatImg', (name, size)=>{
    return {
      path: store.state.initializedId,
      name,
      size,
      type: "webp" || "jpg",
    };
  })
}
