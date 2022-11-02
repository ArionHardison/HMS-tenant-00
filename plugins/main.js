import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VAnimateCss from 'v-animate-css';
import VueEcho from 'vue-echo-laravel';
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(VueEcho, {
    broadcaster: 'socket.io',
    host: 'https://app.codify.solutions',
    client: require("socket.io-client")
});

Vue.use(VAnimateCss);
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
