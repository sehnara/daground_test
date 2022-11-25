import React, {useEffect} from "react";
import { ScrollView } from "react-native";
import { observer } from "mobx-react";
import axios from 'axios'
import STYLE from "../../../constants/style";
import AllNewsBoard from "../../../components/AllNewsBoard";
import UpdatedNewsBoard from "../../../components/UpdatedNewsBoard";
import indexStore from "../../../modules/indexStore";

const Insight = observer(({navigation}) => {
    const {linkStore, insightStore} = indexStore()
    
    useEffect(()=>{    
        if(insightStore.getData().length !== 0) return
        fetchData()
    },[])    

    useEffect(()=>{
        if(linkStore.currentUrl.url ==='')return
        navigation.navigate(linkStore.currentUrl.id === 1 ? '상세' :linkStore.currentUrl.id === 2? '유튜브상세' : '인사이트상세', {item : linkStore.currentUrl.item})
    },[linkStore.currentUrl])

    async function fetchData(){
        const response = await axios.get('https://test.daground.io/info/contents?sector=3', {
            headers : {
              'TEST-AUTH' : 'sandbankfrontend',
            }
          })
        insightStore.setData(response.data.content)
    }

    return (
        <ScrollView>
            <UpdatedNewsBoard 
                title={'새로 올라왔어요'}
                data={insightStore.getLikeTopData()}
            />
            <AllNewsBoard 
                title="어떻게 투자할까" 
                tagName="Report" 
                tagColor = {STYLE.color.background_invest}
                likeData = {insightStore.getLikeTopData()}
                totalData = {insightStore.getData()}
            />
        </ScrollView>
    )
})

export default Insight