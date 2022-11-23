import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Invest from '../../pages/Invest';
import Settings from '../../pages/Settings';
import InfoTopTabs from './InfoTopTabs';
import {Ionicons,Feather, MaterialCommunityIcons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        {tabBarActiveTintColor : "black"}
      }
    >
      <Tab.Screen 
        name="홈" 
        component={Home} 
        options={{
          tabBarIcon : ({focused,color}) => {
              return <Feather name="home" size={24} color={focused ? 'black' : color}/>
          }
      }}  
      />
      <Tab.Screen 
        name="투자" 
        component={Invest} 
        options={{
          tabBarIcon : ({focused, color}) => {
              return <Feather name="trending-up" size={24} color={focused ? 'black' : color} />
          }
      }} 
      />
      <Tab.Screen 
        name="인포" 
        component={InfoTopTabs} 
        options={{
          headerShown:false,
          tabBarIcon : ({focused,color}) => {
            return <MaterialCommunityIcons name="poll" size={24} color={focused ? 'black' : color} />
          }
        }}
      />
      <Tab.Screen 
        name="설정" 
        component={Settings} 
        options={{
          tabBarIcon : ({focused, color}) => {
              return <Ionicons name="ios-settings-outline" size={24} color={focused ? 'black' : color} />
          }
      }}  
      />
    </Tab.Navigator>
  );
}

export default BottomTabs