<template>
  <div>
    <p>Counter: {{ count }}</p>
  </div>
  <div>
    <button @click="inc">
      increment
    </button>
  </div>
  <div>
    <router-link to="/about">
      <p>Go to about</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    inc() {
      this.$store.commit('increment')
    }
  }
}
</script>
