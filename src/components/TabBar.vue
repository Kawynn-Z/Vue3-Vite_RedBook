<template>
  <div class="tab-bar">
    <template v-for="(item,index) in menus" :key="item.path">
      <!-- {{ item.name }} -->
      <div @click="toPath(item.path)" v-if="item.path ==='/publish'" class="tab-pub">
        <i class="iconfont icon-jia"></i>
      </div>
      <div @click="toPath(item.path)" v-else class="tab-name" :class="{active:item.path === path}">{{ item.name }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref,reactive, watch } from 'vue'
import routes from '@/router/routes'
import router from '@/router';

const menus=routes
const path =ref('/')

const toPath=(p)=>{
  router.push({
    path:p
  })
  path.value=p
}


watch(()=>router.currentRoute.value.path,()=>{
  path.value= router.currentRoute.value.path
})

</script>

<style lang='scss' scoped>
.tab-bar{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  @include flexac;
  background-color: aliceblue;
  font-size: .9rem;
  color: rgb(207, 207, 207);
  z-index: 999;
  .tab-name{
    min-width: 10%;
    text-align: center;
    transition: all 0.1s linear;
    &.active{
      font-size: 1rem;
      color: rgb(48, 47, 47);
      font-weight: bold;
    }
  }
  .tab-pub{
    width: 3.125rem;
    height: 70%;
    border-radius: 20%;
    background-color: rgb(240, 77, 36);
    @include flexcc;
    i{
      color: rgb(231, 245, 245);
      font-size: 1.5rem;
    }
  }


}
 
</style>