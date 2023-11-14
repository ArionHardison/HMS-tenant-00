<template>
  <a :href="'mailto:' + deobfuscatedEmail" v-if="deobfuscatedEmail">
    {{ deobfuscatedEmail }}
  </a>
  <span v-else>Loading...</span>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      deobfuscatedEmail: ''
    };
  },
  mounted() {
    if(process.client) {
      this.deobfuscateEmail();
    }
  },
  methods: {
    deobfuscateEmail() {
      let decoded = atob(this.email);
     this.deobfuscatedEmail = this.unshuffle(decoded);
    },
    unshuffle(text) {
    let parts = text.split('|');
      let email = parts[0];
      let order = parts[1];
      let shuffled = Array(email.length);

      order.split(',').forEach((index, i) => {
        shuffled[parseInt(index)] = email[i];
      });

      return shuffled.join('');
    }
  }
};
</script>
