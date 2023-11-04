<template>
  <div class="header-logo">
    <nuxt-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
      <template v-if="$route.path==='/'">
        <img :src="logo" alt="Logo" />
      </template>
      <template v-else>
        <img :src="logoDark ? logoDark : logo" alt="Logo" />
      </template>
    </nuxt-link>
  </div>
</template>

<script>
import layout from "~/mixins/layout";
export default {
  mixins: [layout],
  name: "HeaderLogo",
  props: ["logoColor"],
};
</script>
