import React, { useRef } from "react";
import {StyleSheet, View } from "react-native";
import { observer } from "mobx-react";
import Carousel from "react-native-snap-carousel";
import CardCarousel from "./CardCarousel";
import STYLE from "../constants/style";


const ListCarousel = observer((props) => {
    const {data, setIndex} = props
    const carouselRef = useRef(null)

    return (
        <View style={styles.container}>
            <Carousel 
                layout="default"
                layoutCardOffset={24}
                ref={carouselRef}
                data = {data}
                renderItem = {CardCarousel}
                sliderWidth = {STYLE.SLIDER_WIDTH}
                itemWidth={STYLE.ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                onSnapToItem={(index) => setIndex(index)}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    container : {
        alignItems : "center"
    }
})

export default ListCarousel