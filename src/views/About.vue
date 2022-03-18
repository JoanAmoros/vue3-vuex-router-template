<template>
  <div>
    <p>Counter: {{ count }}</p>
  </div>
  <div>
    <router-link to="/">
      <p>Go to home</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'About',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
}
</script>
