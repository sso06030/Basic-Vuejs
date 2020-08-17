<template>
  <div>
    <p>header</p>
    <slot name="header"></slot>
    <p>body</p>
    <slot name="body" :kozy="kozy"></slot>
    <p>footer(default : slot에 name 지정 안함)</p>
    <slot></slot>
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
    return {
      kozy: "props kozy",
      //name:"kozy",
    };
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