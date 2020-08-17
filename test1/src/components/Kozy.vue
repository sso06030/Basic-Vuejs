<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{name}}</p>
    <button @click="updateName">Change name</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default title",
    },
    name: {
      type: String,
      default: "default name",
    },
  },
  data() {
    return {};
  },
  methods: {
    updateName() {
      this.name = "Kozy Updated";
    },
  },
};
</script>

<style scoped>
</style> 