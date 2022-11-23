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
    }
})

export default youtubeStore