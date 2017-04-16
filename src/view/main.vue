<template>
    <div>
        <gray v-if="styleId===2" :themeType="themeType"></gray>
        <scss></scss>
    </div>
</template>

<style scoped>
</style>

<script>
  // 灰度卡片
  import Gray from '../components/gray.vue';
  import Scss from '../components/scss.vue';

  export default {
    components: {
      Gray,
      Scss
    },
    data() {
      return {
        // 卡片id
        styleId: 2,
        // 主题模式
        themeType: 0
      };
    },
    created() {
    }
  }
</script>
