<template>
    <gray v-if="!!styleId" :themeType="themeType"></gray>
</template>

<style scoped>
</style>

<script>
  // 灰度卡片
  import Gray from '../components/gray.vue';

  export default {
    components: {Gray},
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
