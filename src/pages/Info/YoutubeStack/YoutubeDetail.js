import React, { useEffect, useState } from "react";
import { ScrollView, View,Text,TouchableOpacity, StyleSheet, Share} from "react-native";
import linkStore from "../../../modules/linkStore";
import {Ionicons,Feather} from '@expo/vector-icons'
import {WebView} from 'react-native-webview'
import STYLE from "../../../constants/style";
import AllNewsBoard from "../../../components/AllNewsBoard";
import indexStore from "../../../modules/indexStore";

const YoutubeDetail = (props) => {
    const {title, body, link, id, my_like} = props.route.params.item
    const {youtubeStore} = indexStore()
    const [isLike, setIsLike] = useState(my_like ? true : false)
    const target = youtubeStore.getData().filter(data => data.id === id)[0]
    
    useEffect(()=> {
        return(()=>{
            target['my_like'] = isLike 
            target['like_cnt'] = isLike ? target['like_cnt']+1 : target['like_cnt']-1
            linkStore.setUrl({id : '', url : ""})
        })
    },[isLike])

    const shareUrl = async () => {
        await Share.share({
            message : title,
            url : link
        })
    }

    return (
        <ScrollView>
            <View style={{
                width : "100%",
                height : 210
            }}>
                <WebView
                    source={{uri : `https://www.youtube.com/embed/${link}`}}
                />
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.bodyText}>{body}</Text>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.dataView} onPress={() => setIsLike(!isLike)}>
                    {
                        isLike 
                        ? <Ionicons name="ios-heart" size={16} color="red" />
                        : <Ionicons name="heart-outline" size={16} color="gray" />
                    }
                    <Text style={styles.dataText}>좋아요</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataView} onPress={shareUrl}>
                        <Feather name="upload" size={16} color="gray" />
                        <Text style={styles.dataText}>공유하기</Text>
                </TouchableOpacity>
            </View>

            <AllNewsBoard
                title={'블록체인 NOW'} 
                tagName = {'Youtube'}
                tagColor = {STYLE.color.background_youtube}
                likeData = {youtubeStore.getLikeTopData()}
                totalData = {youtubeStore.getData()}
            />
        </ScrollView>     
    )
}

const styles = StyleSheet.create({
    titleView : {
        marginTop : STYLE.margin.middle,
        backgroundColor : "#dbdbdb",
        padding : STYLE.margin.middle,
        marginBottom : STYLE.margin.very_large
    },
    titleText : {
        textAlign : 'center',
        fontWeight : STYLE.font.semi_bold,
        fontSize : STYLE.font.large
    },
    bodyText : {
        fontWeight : STYLE.font.middle_weight,
        fontSize : STYLE.font.small_middle,
        marginHorizontal : STYLE.margin.very_large,
        marginBottom : STYLE.margin.very_large
    },
    icons : {
        flexDirection : 'row',
        justifyContent : 'center',
    },  
    dataView : {
        flexDirection:"row", 
        alignItems : "center",
        marginHorizontal : STYLE.margin.small
    },
    dataText : {
        marginLeft : 2,
        color : 'gray',
    },
    image: {
        width: "100%",
        height: 256,
    },
})

export default YoutubeDetail