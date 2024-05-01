<template>
    <div class="explore-main">
        <div class="explore-outer">
            <MiniCard v-for="(item, index) in exploreCards" :info="item" :key="item.id"></MiniCard>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import MiniCard from '@/components/MiniCard.vue'
import { exploreCardsMock } from '@/mock/homeData'

let exploreCards = reactive([])
// 初始化exploreCardsMock数据
const initData = () => {
    let res = exploreCardsMock()
    res.forEach(item => {
        exploreCards.push(item)
    })
}
initData()

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