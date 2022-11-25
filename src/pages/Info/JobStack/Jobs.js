import { observer } from "mobx-react";
import React, {useEffect} from "react";
import {ScrollView} from "react-native";
import axios from 'axios'
import STYLE from "../../../constants/style";
import AllNewsBoard from "../../../components/AllNewsBoard";
import UpdatedNewsBoard from "../../../components/UpdatedNewsBoard";
import indexStore from "../../../modules/indexStore";

const Jobs = observer(({navigation}) => {   
    const {linkStore, jobStore} = indexStore()

    useEffect(()=>{    
        if(jobStore.getData().length !== 0) return
        fetchData()
    },[])    

    useEffect(()=>{
        if(linkStore.currentUrl.url ==='')return
        navigation.navigate(linkStore.currentUrl.id === 1 ? '상세' :linkStore.currentUrl.id === 2? '유튜브상세' : '인사이트상세', {item : linkStore.currentUrl.item})
    },[linkStore.currentUrl])

    async function fetchData(){
        const response = await axios.get('https://test.daground.io/info/contents?sector=1', {
            headers : {
              'TEST-AUTH' : 'sandbankfrontend',
            }
          })
        jobStore.setData(response.data.content)
    }

    return (
            <ScrollView>
                <UpdatedNewsBoard 
                    title={'새로 올라왔어요'} 
                    data={jobStore.getLikeTopData()}
                />
                <AllNewsBoard 
                    title={'알쓸B잡'} 
                    tagName={'News'} 
                    tagColor = {STYLE.color.background_news}
                    likeData = {jobStore.getLikeTopData()}
                    totalData = {jobStore.getData()}
                />
            </ScrollView>
        )
})

export default Jobs