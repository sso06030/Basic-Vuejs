<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Kozy>
      <!-- v-slot ==> # -->
      <template v-slot:header>
        <p>this is header slot</p>
      </template>

      <!-- <template #body="props">
        <p>body slot with {{props.kozy}}</p>
      </template>-->
      <template #body="{kozy}">
        <p>body slot with {{kozy}}</p>
      </template>

      <template #default>
        <p>default slot</p>
      </template>
    </Kozy>
  </div>
</template>

<script>
import Kozy from "@/components/Kozy.vue";
export default {
  components: {
    Kozy,
  },
};
</script> 