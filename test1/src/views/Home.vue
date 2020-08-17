
<template>
  <div>
    <h1>This is Home page</h1>
    <form action>
      <!-- name을 보내주고 emit으로 받아오는게 복잡하니 컴포넌트에서도 v-model로 간단하게 가능 
      <InputField :name="name" @update-name="name=$event.target.value" />-->
      <InputField v-model="name" />
      <br />
      <button @click="updateName">Submit</button>
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
      name: "kozy",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.name);
  },
  //데이터 접근 가능
  //서버에 요청을 보내서 응답을 받아온 데이터를 업데이트 해줄 때
  created() {
    console.log("created", this.name);
  },

  beforeMount() {
    alert("beforeMount");
  },
  //화면이 dom에 접근 가능
  //dom을 control 하고 싶은 경우
  //화면에 정보가 보여짐
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  //about 페이지로 넘어가면 home 컴포넌트가 없어짐
  beforeDestroy() {
    alert("beforeDestroy");
  },
  //나갈 때 메모리 누수를 방지하기 위해서
  //eventlistener를 삭제해주거나 데이터를 초기화해주는 작업을 함
  destroyed() {
    alert("destroyed");
  },

  methods: {
    updateName() {
      this.name = "updated";
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style> 