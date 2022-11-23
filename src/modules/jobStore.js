import {observable} from 'mobx'

const jobStore = observable({
    jobs : [],
    setData(arr){
        this.jobs = arr
    },
    getData(){
        return this.jobs
    },
    getLikeTopData(){
        return this.jobs.filter(data => data["like_top"] === 1)
    },
    setLike(id){
        const target = this.jobs.filter(data => data.id === id)[0]
        target['my_like'] = target['my_like'] ? false : true
        target['like_cnt'] = target['my_like'] ? target['like_cnt'] -1 <= 0 ? 0 : target['like_cnt'] -1 : target['like_cnt'] + 1
        return target['my_like']
    }
})

export default jobStore