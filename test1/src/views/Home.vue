<!-- html 코드 --> 
<template>
  <!-- 가장 바깥에 태그로 전체를 감싸야함 --> 
  <div>
    <h1>This is Home page</h1>
    <Kozy title="home title" name="kozy"/>
  </div>
</template>

<!-- 옵션 : data, method, computed, watch... -->
<script>
//@ : src를 가리킨다
import Kozy from '@/components/Kozy.vue';

export default{
  components:{
      Kozy
  },

  //data는 함수로 정의 후 obj를 리턴해야함
  data(){
    return {
      //name:'Kozy'
    }
  }
}
</script>

<!-- css 코드 -->
<!-- scoped : 전역이 아닌 해당 컴포넌트 내에서만 적용 -->
<style scoped>
h1 {
  color:red;
}
</style>