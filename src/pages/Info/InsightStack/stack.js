import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Insight from "./Insight.js";
import InsighDetail from "./InsightDetail.js";

const Stack = createNativeStackNavigator()
const InsightStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="메인" 
                component={Insight} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="인사이트상세" 
                component={InsighDetail} 
                options={{headerShown:true, headerBackTitle : '', title:"어떻게 투자할까"}}
            />
        </Stack.Navigator>
    )
}

export default InsightStack

