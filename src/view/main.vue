<template>
    <gray v-if="!!styleId" :themeType="themeType"></gray>
</template>

<style scoped>
</style>

<script>
  const weexRequire = weex.requireModule || weex.require;

  // 灰度卡片
  import Gray from '../components/gray.vue';
  // uc事件
  const ucEvent = weexRequire('uc-event');

  // 配置项
  const config = weex.config;
  // uc配置
  const ucConfig = config.uc || {};
  // 商业化卡片配置
  const bizCard = ucConfig.bizCard || {};
  //  主题信息
  const theme = JSON.parse(ucConfig.theme || null) || {};

  export default {
    components: {Gray},
    data() {
      return {
        // 卡片id
        styleId: bizCard.styleId || 2,
        // 主题模式
        themeType: theme.themeType
      };
    },
    created() {
      if (ucEvent) {
        // 切换主题
        ucEvent.addEventListener('themeChange', (t) => {
          const theme = JSON.parse(t);
          // 0: 日间, 1: 夜间, 2: 透明, 3: 其他
          this.themeType = theme.themeType;
        });

        // 切换卡片样式
        ucEvent.addEventListener('refreshPage', () => {

        });
      }
    }
  }
</script>
