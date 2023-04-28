<template>
  <div id="page-title">
    <div class="wrapper text-center">
      <h1 class="large">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: "Page Title",
    }
  }
};
</script>
