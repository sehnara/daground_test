import {observable} from 'mobx'

const youtubeStore = observable({
    youtube : [],
    setData(arr){
        this.youtube = arr
    },
    getData(){
        return this.youtube
    },
    getLikeTopData(){
        return this.youtube.filter(data => data["like_top"] === 1)
    },
    setLike(id){
        const target = this.youtube.filter(data => data.id === id)[0]
        target['my_like'] = target['my_like'] ? false : true
        target['like_cnt'] = !target['my_like'] ? (target['like_cnt'] -1 <= 0 ? 0 : target['like_cnt'] -1) : target['like_cnt'] + 1
        return target['my_like']
    },
    getDataById(id){
        return this.youtube.filter(data => data.id === id)[0]
    }
})

export default youtubeStore