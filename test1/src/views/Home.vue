
<template>
  <div>
    <h1>This is Home page</h1>
    <form action>
      <!-- name을 보내주고 emit으로 받아오는게 복잡하니 컴포넌트에서도 v-model로 간단하게 가능 
      <InputField :name="name" @update-name="name=$event.target.value" />-->
      <InputField v-model="name" />
      <br />
      <button>Submit</button>
    </form>
    {{ name }}
  </div>
</template>


<script>
import InputField from "@/components/InputField.vue";
export default {
  components: {
    InputField,
  },
  data() {
    return {
      name: "",
    };
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   },
  // },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> 