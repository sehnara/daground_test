import React, {useRef} from "react";
import { observer } from "mobx-react";
import { ScrollView, View,Text,TouchableOpacity, StyleSheet, Animated} from "react-native";
import {WebView} from 'react-native-webview'
import {Ionicons,Feather} from '@expo/vector-icons'
import STYLE from "../../../constants/style";
import AllNewsBoard from "../../../components/AllNewsBoard";
import indexStore from "../../../modules/indexStore";
import { shareUrl } from "../../../api/api";
import { onLikeEffect } from "../../../api/animation";

const YoutubeDetail = observer((props) => {
    const {title, body, link, id, my_like} = props.route.params.item
    const {youtubeStore} = indexStore()
    const scale = useRef(new Animated.Value(1)).current

    const onClickLike =() => {
        youtubeStore.setLike(id)
        onLikeEffect(scale)
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
                <TouchableOpacity style={styles.dataView} onPress={onClickLike}>
                    <Animated.View style={{transform : [{scale}]}}>
                    {
                        my_like 
                        ? <Ionicons name="ios-heart" size={16} color="red" />
                        : <Ionicons name="heart-outline" size={16} color="gray" />
                    }
                    </Animated.View>  
                    <Text style={styles.dataText}>좋아요</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dataView} onPress={()=>shareUrl(title,link)}>
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
})

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