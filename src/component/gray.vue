<template>
    <div class="wrapper" :style="{height: height}">
        <!--<text>{{debugInfo}}</text>-->
        <div class="imageWrap" :style="{height: height}" @click="redirect">
            <img class="image" :src="imgSrc" :style="{width: width, height: height}" />
            <div class="nightMask" :style="+themeType === 1 && {visibility: 'visible'}"></div>
        </div>
    </div>
</template>

<style scoped>
    .imageWrap {
        position: relative;
    }

    .nightMask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        visibility: hidden;
    }
</style>

<script>
  // 初始屏幕宽度
  const winWidth = 750;

  // 图片数据
  const imgs = [
    'http://image.uc.cn/s/uae/g/1y/weex/biz-card/gray/0.jpg',
    'http://image.uc.cn/s/uae/g/1y/weex/biz-card/gray/1.jpg'
  ];
  let index = 0;
  // 图片宽高比
  const imgWHRatio = 640 / 300;

  export default {
    data() {
      return {
        // 默认第1张图
        imgSrc: imgs[index],
        width: `${winWidth}px`,
        height: `${winWidth / imgWHRatio}px`,
        // 点击图片跳转url
        url: 'http://go.uc.cn/page/choice/8guaceshi4?uc_param_str=dnfrpfbivecpbtntlaprnids&admincptm=1490351318004'
      };
    },
    props: {
      themeType: {
        default: undefined
      }
    },
    created() {
      // 初始化定时器(5分钟换1次图)
      setInterval(() => {
        this.changeImgSrc();
      }, 5 * 1000);
    },
    methods: {
      // 设置尺寸
      setSize(width) {
        this.width = `${width}px`;
        this.height = `${width / imgWHRatio}px`;
      },
      // 跳转
      redirect() {
        location.href = this.url;
      },
      // 改变图片
      changeImgSrc() {
        if (++index === imgs.length) {
          index = 0;
        }
        this.imgSrc = imgs[index];
      }
    }
  };
</script>
