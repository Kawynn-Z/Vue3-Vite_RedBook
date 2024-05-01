<template>
  <div class="card-content">
    <div class="card-top">
      <div class="card-tri-bg" v-if="props.info.isVideo">
        <svg viewBox="-70 -50 200 300" class="card-svg">
          <polygon class="card-tri" stroke-linejoin="round" points="0,0 0,200 170,100"></polygon>
        </svg>
      </div>
      <img :src="props.info.imageUrl" class="card-sorce" @load="emits('onImgLoaded')" />
    </div>
    <div class="card-title">{{ props.info.content }}</div>
    <div class="card-button">
      <div class="card-b-left">
        <img :src="props.info.avatar" class="card-head" alt="">
        <div class="card-name">{{ props.info.author }}</div>
      </div>
      <div class="card-b-right">
        <i class="iconfont icon-aixin1 icon-card-small"></i>
        <p class="card-like" v-if="props.info.likeCount > 0">{{ props.info.likeCount }}</p>
        <p class="card-like" v-else>赞</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const props = defineProps(['info'])
// import {exploreCardsMock} from '@/mock/homeData.js'
// let info=reactive({})
// info = exploreCardsMock()

const emits = defineEmits(['onImgLoaded'])

</script>

<style lang='scss' scoped>
.card-content {
  width: 50vw;
  height: auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 .125rem .3125rem rgb(181, 181, 191, 0.1);
  overflow: hidden;
  position: absolute;

  .card-top {
    position: relative;

    .card-tri-bg {
      position: absolute;
      right: 0.625rem;
      top: 0.625rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: black;
      @include flexcc;

      .card-svg {
        width: 0.8rem;
        height: 0.8rem;

        .card-tri {
          fill: rgba(254, 255, 255, 0.979);
          stroke: rgba(254, 255, 255, 0.979);
          stroke-width: 0.05rem;
        }
      }
    }

    // 让图片高度随着宽度自适应，图片比例保持不变（用类名写不起作用，要用img标签！！！）
    // .card-source{
    img {
      width: 100%;

    }
  }

  .card-title {
    width: calc(100% - 1rem);
    font-size: 0.75rem;
    letter-spacing: 0.05rem;
    color: rgb(59, 59, 59);
    line-height: 1.125rem;
    font-weight: 600;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

  }

  .card-button {
    padding: 0.8rem 0.5rem;
    @include flexlr;

    .card-b-left {
      @include flexxl;

      .card-head {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
      }

      .card-name {
        color: rgb(59, 59, 59);
        font-size: 0.5rem;
        // margin-left:0 0 0 0.4375rem; 博主有一些地方写错了
        margin-left: 0.4375rem;
      }
    }

    .card-b-right {
      @include flexxl;

      .icon-card-small {
        // font-size: 0.5rem;
        font-size: .75rem;
        color: rgb(128, 125, 125);
      }

      .card-like {
        margin: 0 0 0 0.3rem;
        color: rgb(128, 125, 125);
        // font-size: 0.5rem;
        font-size: .75rem;
      }
    }
  }
}
</style>