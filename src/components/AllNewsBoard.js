import React, { useEffect, useRef, useState } from "react";
import {StyleSheet, View, Text} from 'react-native'
import STYLE from "../constants/style.js";
import CardNews from "./CardNews.js";
import NormalButton from "./NormalButton.js";
import StatusTag from "./StatusTag.js";

const AllNewsBoard = (props) => {
    const {title, tagName, tagColor, likeData, totalData} = props
    const [renderData, setRenderData] = useState(likeData)

    useEffect(()=>{
        setRenderData(likeData)
    },[likeData])

    const getMoreData = () => {
        setRenderData(totalData)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>      
                <StatusTag text={tagName} backgroundColor={tagColor}/>      
            </View>
            {
                renderData&&renderData.map(card => {
                return (
                    <CardNews 
                        key={card.id}
                        sector_id = {card.sector_id}
                        title = {card.title}
                        imgUrl={card.image} 
                        date={card.upload_date}
                        likes={card.like_cnt} 
                        link = {card.link}
                        item = {card}
                        myLike={card.my_like}
                    />
                )})
            }
            <NormalButton text={'더보기'} onPressEvent={getMoreData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : STYLE.board.backgroundColor,
        paddingVertical : STYLE.board.verticalPadding,
        paddingBottom : 0,
        paddingHorizontal : STYLE.board.horizontalPadding,
        margin : STYLE.board.margin,
        borderRadius : STYLE.board.borderRadius,
        
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
})



export default AllNewsBoard