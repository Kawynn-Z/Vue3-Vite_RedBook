// 自动计算瀑布流的位置
// 1、计算每个card的宽度，高度会随宽度而变化
// 2、计算每个card使用的是绝对定位，只需要计算每个card的偏移量就行
// 3、计算外部div的高度，以便做滚动
// 4、监听resize事件

const computeWaterFallFlow = (ref, colums = 2) => {
    let resizeListener = null

    const computeCard = () => {
        const cards = ref.children
        const winWidth = window.innerWidth //获取当前视域宽度
        const margin = Math.round(winWidth * 0.015) //计算每个card之间的间距
        const cardWidth = Math.floor((winWidth - margin * (colums + 1)) / colums) //计算出每个card的宽度
        
        const topList = new Array(colums).fill(0) //用于记录每一列的当前顶部距离

        // 给每个card赋予宽度，因为card中的img高度会随宽度自适应，所以每个card高度会自适应
        for (let i = 0; i < cards.length; i++) {
            // const card=cards[i]
            // card.style.width=`${cardWidth}px`
            cards[i].style.width = cardWidth + 'px'
        }

        // 计算每个card的位置偏移量
        for (let i = 0; i < cards.length; i++) {
            // 判断当前哪一列比较高，card插在高的那一刻
            let min = Math.min(...topList)
            const minColum = topList.indexOf(min)

            // 计算出card的偏移量
            let left = margin * (minColum + 1) + cardWidth * minColum
            let top = min + margin
            cards[i].style.transform = `translate(${left}px,${top}px)`
            topList[minColum] += cards[i].clientHeight + margin
        }
        ref.style.height = Math.max(...topList) + margin + 'px'


    }

    computeCard()

    // 监听resize事件
    if (!resizeListener) {
        resizeListener = window.addEventListener('resize', () => {
            computeCard()
        })
    }



}


export default computeWaterFallFlow
