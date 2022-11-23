import React from "react";
import { StyleSheet, Text, View } from "react-native";
import STYLE from "../constants/style";

const StatusTag = (props) => {
    const {text, backgroundColor} = props

    return ( 
        <View style={{
            backgroundColor : `${backgroundColor}`, 
            padding : 1,
            borderRadius : 6,
            marginLeft : 4
        }}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize :STYLE.font.small,
        color : 'white',
        padding : 2,
        textAlign : "center",
    }
})

export default StatusTag