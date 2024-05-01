<template>
    <div class="explore-main">
        <div class="explore-outer">
            <div ref="exploreRef">
                <MiniCard v-for="(item, index) in exploreCards" :info="item" :key="item.id" @onImgLoaded="addImgCount">
                </MiniCard>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref, reactive } from 'vue'
import MiniCard from '@/components/MiniCard.vue'
import { exploreCardsMock } from '@/mock/homeData'
import computeWaterFallFlow from '@/utils/waterFallFlow'

let exploreCards = reactive([])
let imgLen //记录需要加载的总图片数

// 初始化exploreCardsMock数据
const initData = () => {
    let res = exploreCardsMock()

    imgLen = res.length

    res.forEach(item => {
        exploreCards.push(item)
    })
}
initData()

// 瀑布流计算每个card的位置
const exploreRef = ref(null)

// 记录card中的image是否都已经加载完毕
let imgCount = 0
const addImgCount = () => {
    imgCount++
    if (imgCount === imgLen) {
        // 开始计算瀑布流
        // computeWaterFallFlow(exploreRef.value,2)不能这么写，会不显示成功
        // computeWaterFallFlow(exploreRef.value,3) 这个也可以,第二个参数默认为2
        // 下面的这个写法的2可以改变成3,4。。。看看什么效果
        computeWaterFallFlow(exploreRef.value)
    }
}


</script>

<style lang='scss' scoped>
.explore-main {
    overflow: auto;
    height: 100%;

    .explore-outer {
        position: relative;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
}
</style>