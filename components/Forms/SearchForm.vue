<template>
  <form class="search-form" role="search" method="get" :action="urlAction">
    <div class="search input-group">
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Type here to search"
        name="query"
      />

      <div class="input-group-append">
        <button
          type="submit"
          class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto link-no-space"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      urlAction: null,
    };
  },
  mounted() {
    if (process.client) {
      this.urlAction =
        window.location.origin +
        this.$router.resolve({
          name: "search-results",
          params: { id: 1 },
        }).href;
    }
  },
};
</script>
