// nums=20
const exploreCardsMock = (nums = 20) => {
    // return new Array(nums).fill(1).map((item,index)=>{})
    return new Array(nums).fill(1).map((a, i) => {
        let r = Math.random() //[0,1)
        r = Math.floor(r * 9) + 1 //[0,9]
        return {
            id: i,
            isVideo: Math.random() > 0.5 ? 1 : 0,
            imageUrl: 'src/mock/images/img0' + r + '.jpg',
            content: r % 2 != 0 ? '我出来打工，不惦记钱，我惦记什么？' : '臣妾要告发喜贵人私通，扰乱后宫，罪不容诛',
            avatar: 'src/mock/images/h0' + r + '.jpg',
            author: 'TheZ' + r,
            likeCount: Math.floor(Math.random() * 1000)
        }
    })

}

export {
    exploreCardsMock
}

// return{
//     id:0,
//     isVideo:1,
//     imageUrl:'src/mock/images/img01.jpg',
//     content:'test test pinkbook test test pingkbooktest test pingkbooktest test pingkbook ',
//     avatar:'src/mock/images/h01.jpg',
//     author:'TheZ',
//     likeCount:100
// }