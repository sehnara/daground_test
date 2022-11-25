import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Youtube from "./Youtube.js";
import YoutubeDetail from "./YoutubeDetail.js";

const Stack = createNativeStackNavigator()
const YoutubeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="메인" 
                component={Youtube} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="유튜브상세" 
                component={YoutubeDetail} 
                options={{headerShown:true, headerBackTitle : '', title:"블록체인NOW"}}
            />
        </Stack.Navigator>
    )
}

export default YoutubeStack

