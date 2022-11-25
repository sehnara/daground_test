import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import JobStack from '../../pages/Info/JobStack/stack.js';
import YoutubeStack from '../../pages/Info/YoutubeStack/stack.js';
import InsightStack from '../../pages/Info/InsightStack/stack.js';
import Market from '../../pages/Info/Market.js'
import Quiz from '../../pages/Info/Quiz.js'

const Tab = createMaterialTopTabNavigator();
function InfoTopTabs() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarStyle : {paddingTop: 24}
      }}>
        <Tab.Screen name="알쓸B잡" component={JobStack} />
        <Tab.Screen name="유튜브" component={YoutubeStack} />
        <Tab.Screen name="인사이트" component={InsightStack} />
        <Tab.Screen name="퀴즈" component={Quiz} />
        <Tab.Screen name="마켓" component={Market} />
      </Tab.Navigator>
  );
}

export default InfoTopTabs