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
    }
})

export default insightStore