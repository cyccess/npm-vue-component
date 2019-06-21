<template>
  <div>
    <div class="topbar">
      <div class="logo">
        <router-link :to="{name:'dashboard'}">
          <LogoSvg alt="logo" />          
          <h1 v-if="showTitle">{{ title }}</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import LogoSvg from '@/assets/logo.svg'
  export default {
    name: "x-header",
    components: {
      LogoSvg
    },
    props: {
      title: {
        type: String,
        default: '兴农融资担保',
        required: false
      },
      showTitle: {
        type: Boolean,
        default: true,
        required: false
      }
    }
  }
</script>

<style scoped lang="less">
  .topbar{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
    z-index: 999!important;
  }
</style>
