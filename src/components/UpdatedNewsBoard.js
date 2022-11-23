import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Share} from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'
import STYLE from "../constants/style.js";

import ListCarousel from "./ListCarousel.js";
import PaginationCarousel from "./PaginationCarousel.js";
import StatusTag from "./StatusTag.js";
import indexStore from "../modules/indexStore.js";

const UpdatedNewsBoard = (props) => {
    const {jobStore, insightStore, youtubeStore} = indexStore()
    const {title, data} = props
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [isLike, setIsLike] = useState(false)
    
    useEffect(()=>{
        if(data.length === 0) return
        setIsLike(data[carouselIndex]['my_like'] ? true : false)
    },[carouselIndex,data])

    const shareUrl = async () => {
        await Share.share({
            message : data[carouselIndex].title,
            url : data[carouselIndex].link
        })
    }
    const setIndex = (n)=>{
        setCarouselIndex(n)
    }

    const onLike = () => {
        const store = data[carouselIndex].sector_id === 1 ? jobStore : data[carouselIndex].sector_id === 2 ? youtubeStore : insightStore
        const isLike = store.setLike(data[carouselIndex].id)
        setIsLike(isLike)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>      
                <StatusTag text={'NEW'} backgroundColor={STYLE.color.background_new}/>      
            </View>
            <ListCarousel data={data} setIndex={setIndex}/>
            <View style={styles.bottom}>
                <PaginationCarousel data={data} index={carouselIndex}/>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={onLike}>
                        {
                            isLike 
                            ? <Ionicons name="ios-heart" size={32} color="red" />
                            :<Ionicons name="ios-heart-outline" size={32} color="gray" />
                        }                        
                    </TouchableOpacity>
                    <TouchableOpacity onPress={shareUrl}>
                        <Feather name="upload" size={32} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : STYLE.board.backgroundColor,
        paddingVertical : STYLE.board.verticalPadding,
        paddingBottom : 0,
        paddingHorizontal : STYLE.board.horizontalPadding,
        marginTop : STYLE.board.margin,
        marginHorizontal : STYLE.board.margin,
        borderRadius : STYLE.board.borderRadius
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : STYLE.margin.middle
    },
    title : {
        fontSize : STYLE.font.middle,
        fontWeight : STYLE.font.semi_bold,
    },
    bottom : {
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center',
        paddingHorizontal : 10
    },
    buttons : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : "center",
        width : 84
    }

})



export default UpdatedNewsBoard