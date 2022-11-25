import { Animated } from "react-native"

export const onLikeEffect = (scale) => {
    Animated.sequence([
        Animated.timing(scale, {
            toValue : 0.5,
            duration : 120,
            useNativeDriver: true,
        }),
        Animated.timing(scale, {
            toValue : 1.2,
            duration : 120,
            useNativeDriver : true
        }),
        Animated.timing(scale, {
            toValue : 1,
            duration : 350,
            useNativeDriver : true
        })
    ]).start()
}