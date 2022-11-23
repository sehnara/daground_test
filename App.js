import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/tabs/BottomTabs';

export default function App() {
  return (    
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
  );
}

