import {observable} from 'mobx';

const linkStore = observable({
    currentUrl : {id : 0, url  :"", item:""},
    setUrl(t){
        this.currentUrl = t
    },
    getUrl(){
        return this.currentUrl
    }
})

export default linkStore