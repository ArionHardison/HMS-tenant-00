<template>
  <div class="menu-toggle">
    <button @click="toggleMenuModal"  type="button" class="btn btn-lg btn-before-horbar btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal">Menu</button>
  </div>
</template>

<script>
export default {
  name: 'MenuModalButton',
  methods: {
    toggleMenuModal: function( event ) {
      this.$store.commit( 'toggleMenuModal' );
    }
  }
};
</script>
