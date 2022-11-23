import React, { useEffect } from "react";
import {WebView} from 'react-native-webview'
import linkStore from "../../../modules/linkStore";

const InsighDetail = (props) => {
    const {route} = props

    useEffect(()=> {
        return(()=>{
            linkStore.setUrl({id : '', url : ""})
        })
    },[])

    return (
        <WebView
            source={{uri : route.params.item.link}}           
        />
    )
}

export default InsighDetail