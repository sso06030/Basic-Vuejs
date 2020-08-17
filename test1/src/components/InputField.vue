<template>
  <div>
    <label for>Name</label>
    <!-- props는 여기서 변경하면 안되니까 
        양방향 바인딩 v-model="name"
    대신 :value="name" 사용
    <input
      type="text"
      :value="name"
      style="padding:30px; border:2px solid green;"
      @input="updateName"
    />-->

    <!--method 사용하지 않고 보내주는 방법도 가능
    <input
      type="text"
      :value="name"
      style="padding:30px; border:2px solid green;"
      @input="$emit('update-name',$event)"
    />-->

    <!-- 밑의 value를 받아오고 이벤트를 'input'으로 바꿔주고 타겟의 값을 올려줌-->
    <input
      type="text"
      :value="value"
      style="padding:30px; border:2px solid green;"
      @input="$emit('input',$event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    //Home에서 InputField에 v-model을 사용할 경우
    //name이 아닌 value로 보내줄 것
    // name: {
    //   type: String,
    //   required: true,
    // },
    value: {
      type: String,
      required: true,
    },
  },
  //   methods: {
  //     updateName(e) {
  //       //console.log(e.target.value);
  //       this.$emit("update-name", e.target.value);
  //     },
  //   },
};
</script>