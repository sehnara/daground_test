import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "./Jobs";
import JobDetail from "./JobDetail";

const Stack = createNativeStackNavigator()

const JobStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="메인" 
                component={Jobs} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="상세" 
                component={JobDetail} 
                options={{headerShown:true, headerBackTitle : '', title:"알쓸B잡"}}
            />
        </Stack.Navigator>
    )
}

export default JobStack

