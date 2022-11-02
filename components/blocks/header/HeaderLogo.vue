<template>
  <div class="header-logo">
    <nuxt-link class="logo logo-primary transform-scale-h" title="Logo" to="/">
      <template >
        <img :src="logo" alt="Logo" />
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
