import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import STYLE from "../constants/style";
import indexStore from "../modules/indexStore";

const CardCarousel = (props) => {
    const {linkStore} = indexStore()
    const {item, index} = props

    return (
    <TouchableOpacity style={styles.container} key={index} onPress={()=> {linkStore.setUrl({id : item.sector_id, url : item.link , item})}}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />                
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyFont}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 250
    },
    imageContainer:{
        flex :1,
        position : "relative"
    },
    bodyContainer : {
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        backgroundColor : 'white',
        borderRadius : 16,
        marginBottom : 6,
        marginHorizontal : 2,
        padding : 24

    },
    bodyFont : {
        textAlign : "center",
        fontSize : STYLE.font.middle,
        fontWeight : STYLE.font.bold,
    },
    image: {
        width: STYLE.image.width,
        height: STYLE.image.height,
    },
    imageFilter:{
        position : "absolute",
        backgroundColor : 'black',
        opacity : 0.4,
        width: STYLE.image.width,
        height: STYLE.image.height,
    },  
    title : {
        position : "absolute",
        left : '50%',
        top : '50%',
        color : 'white',
        fontSize : STYLE.font.middle,
        fontWeight : STYLE.font.bold,
        textAlign : "center",
        transform: [
            {translateX : -5},
            {translateY : -15}
        ],
    }
})

export default CardCarousel