<template>
  <div class="home-container">
    <!-- 头部导航切换 -->
    <div class="home-swiper-head">
      <i class="iconfont icon-donuts2"></i>
      <div class="swiper-name">
        <span v-for="(item,idx) in moduleList" @click="changeSwiper(idx)"  :class="{active : idx === moduleIdx}">{{ item }}</span>
      </div>
      <i class="iconfont icon-sousuo"></i>
    </div>

    <!-- 内容 -->
    <swiper @swiper="onSwiper" @slipdeChange="onSlipdeChange" :initialSlide="moduleIdx" class="my-swiper">
      <swiper-slide>
        <div class="slide-content">11</div>
      </swiper-slide>
      <swiper-slide>
        <!-- <div class="slide-content">22</div> -->
        <Explore></Explore>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">33</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Explore from './Explore.vue';

const moduleList = reactive(['关注','发现','附近'])

// 点击切换标题
let moduleIdx = ref(1)
const changeSwiper = (idx)=>{
  moduleIdx.value = idx
  mySwiper?.slideTo(idx)
}

// 初始化swiper
let mySwiper = null
const onSwiper = (swiper) => {
  // console.log(swiper)
  mySwiper = swiper
}
const onSlipdeChange = ({activeIndex}) => {
  moduleIdx.value = activeIndex
}

// const onSlipdeChange = () => {
// }


</script>

<style lang='scss' scoped>
 .home-container{
  .my-swiper{
    height: 100vh;
    background-color: rgb(255, 255, 255);

    .slide-content{
      @include flexcc;
      height: 50vh;
    }
  }
  .home-swiper-head{
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    right: 0;
    background-color: rgb(255, 255, 255);
    padding: 0 1rem;
    z-index: 2;
    @include flexbc;

    .iconfont{
      font-size: 1.2rem;
      color: rgb(66, 65, 65);
    }
    .iconfont:nth-child(1){
      color: rgb(247, 230, 86)
    }
    
    .swiper-name{
      @include flexcc;
      font-size: 0.9rem;
      color: rgb(213, 216, 218);

      span{
        padding:.9375rem;
        box-sizing:content-box;

        &.active{
          font-size: 1rem;
          color: rgb(100, 99, 99);
          font-weight: bold;
        }
      }
    }
  }
  
}
</style>
