import React, { useEffect, useRef, useState } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Share, Animated} from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'
import { observer } from "mobx-react";
import STYLE from "../constants/style.js";
import ListCarousel from "./ListCarousel.js";
import PaginationCarousel from "./PaginationCarousel.js";
import StatusTag from "./StatusTag.js";
import indexStore from "../modules/indexStore.js";
import { shareUrl } from "../api/api.js";
import { onLikeEffect } from "../api/animation.js";

const UpdatedNewsBoard = observer((props) => {
    const {title, data} = props
    const {jobStore, insightStore, youtubeStore} = indexStore()
    
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [currentId, setCurrentId] = useState(0)
    
    const currentStore = data[carouselIndex] === undefined ? undefined : data[carouselIndex]['sector_id'] === 1 ? jobStore : data[carouselIndex]['sector_id'] === 2 ? youtubeStore : insightStore
    const scale = useRef(new Animated.Value(1)).current    
   
    useEffect(()=>{
        if(data.length === 0) return
        setCurrentId(data[carouselIndex].id)
    },[carouselIndex,data])

    useEffect(()=>{
            onLikeEffect(scale)
    },[data[carouselIndex] && data[carouselIndex]['my_like']])
    
    const setIndex = (n)=>{
        setCarouselIndex(n)
    }

    const onLike = () => {
        currentStore.setLike(currentId)
        onLikeEffect(scale)
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
                    <TouchableOpacity onPress={onLike} >
                        <Animated.View style={{transform : [{scale}]}}>
                        {
                            currentStore === undefined 
                            ? <Ionicons name="ios-heart-outline" size={32} color="gray"/>
                            :
                            (
                                !currentStore.getDataById(currentId)
                                ?<Ionicons name="ios-heart-outline" size={32} color="gray" />
                                :(currentStore.getDataById(currentId)['my_like']
                                    ? <Ionicons name="ios-heart" size={32} color="red" />
                                    :<Ionicons name="ios-heart-outline" size={32} color="gray" />
                            ))
                        }              
                        </Animated.View>          
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=> shareUrl(data[carouselIndex].title, data[carouselIndex].link)}>
                        <Feather name="upload" size={32} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
})

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
    },

})



export default UpdatedNewsBoard