import React from "react";
import {StyleSheet} from 'react-native'
import { Pagination } from "react-native-snap-carousel";

const PaginationCarousel = (props) => {
    const {data, index} = props
    
    return (
        <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            containerStyle={styles.container}
            dotStyle={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#0f69fa'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />
    )
}

const styles = StyleSheet.create({
    container : {
        marginLeft : 8, 
        width : 32, 
        height : 0
    }
})

export default PaginationCarousel