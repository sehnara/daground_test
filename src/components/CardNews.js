import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Share, Linking } from "react-native";
import {Ionicons,Feather} from '@expo/vector-icons'
import STYLE from "../constants/style";
import linkStore from "../modules/linkStore";

const CardNews = (props) => {
    const {sector_id, title, imgUrl, date, likes, link, item, myLike} = props
    
    const shareUrl = async () => {
        await Share.share({
            message : title,
            url : link
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={()=> {linkStore.setUrl({id : sector_id, url : link, item})}} >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.image}
                />
            </View>

            <View style={styles.dataContainer}>
                <Text  style={styles.dataText}>{date}</Text>
                <View style={styles.icons}>
                    <View style={styles.dataView}>
                        {   
                            (myLike ? true : false) 
                            ? <Ionicons name="ios-heart" size={16} color="red" />
                            : <Ionicons name="ios-heart-outline" size={16} color="gray" />
                        }
                        <Text style={styles.dataText}>{likes}</Text>
                    </View>
                    <TouchableOpacity style={styles.dataView} onPress={shareUrl}>
                            <Feather name="upload" size={16} color="gray" />
                            <Text style={styles.dataText}>공유하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent :"center",
        alignItems : 'center',
        marginBottom : 16
    },
    imageContainer : {
        flex :1,
        position : "relative"
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
    dataContainer : {
        margin : 8,
        flexDirection : "row",
        width : STYLE.image.width,
        justifyContent : "space-between",
        alignItems : "center"
    },
    icons : {
        width : 110,
        flexDirection : "row",
        justifyContent : "space-between"
    },
    dataView : {
        flexDirection:"row", 
        alignItems : "center",
    },
    dataText : {
        marginLeft : 2,
        color : 'gray',
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
            {translateX : -20},
            {translateY : -5}
        ],
    }   

})

export default CardNews