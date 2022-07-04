<template>
  <ParentLayout>
    <div class="content" slot="page-bottom">
      <h1>FE 김지훈 블로그</h1>
      <div>Intro</div>
    </div>
  </ParentLayout>
</template>

<style scoped>
  .content {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem;
    padding-top: 0px;
  }
  
  h1 {
    margin-top: 0;
  }
</style>

<script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

export default {
  components: {
    ParentLayout
  }
};
</script>