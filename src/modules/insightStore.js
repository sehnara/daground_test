import {observable} from 'mobx'

const insightStore = observable({
    insights : [],
    setData(arr){
        this.insights = arr
    },
    getData(){
        return this.insights
    },
    getLikeTopData(){
        return this.insights.filter(data => data["like_top"] === 1)
    },
    setLike(id){
        const target = this.insights.filter(data => data.id === id)[0]
        target['my_like'] = target['my_like'] ? false : true
        target['like_cnt'] = !target['my_like'] ? (target['like_cnt'] -1 <= 0 ? 0 : target['like_cnt'] -1) : target['like_cnt'] + 1
        return target['my_like']
    },
    getDataById(id){
        return this.insights.filter(data => data.id === id)[0]
    }
})

export default insightStore