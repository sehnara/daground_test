import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import STYLE from "../constants/style";

const NormalButton = (props) => {
    const {text, onPressEvent} = props

    return (
        <TouchableOpacity style={styles.container} onPress={onPressEvent}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : STYLE.color.background_normal_button,
        padding : 16,
        marginTop : 8,
        marginBottom : 32,
        borderRadius : 64,

    },
    text: {
        textAlign : "center",
        color : STYLE.color.text_normal_button,
        fontWeight : STYLE.font.bold,
        fontSize : STYLE.font.middle
    }
})

export default NormalButton