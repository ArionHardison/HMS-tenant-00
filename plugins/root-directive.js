import Vue from 'vue'


Vue.directive('src', (el, binding) => {
    el.src = binding.value ? `https://codify.solutions/public/files?path=${binding.value}` : 'img/default.png'
})


Vue.directive('href', (el, binding) => {
    el.href = `https://codify.solutions/public/files?path=${binding.value || ''}`
})


Vue.directive('bg-img', (el, binding) => {
    el.style.backgroundImage = binding.value ? `url(https://codify.solutions/public/files?path=${binding.value})` : 'img/default.png'
    el.style.backgroundPosition = 'center'
    el.style.backgroundRepeat = 'no-repeat'
    el.style.backgroundSize = 'cover'
})

