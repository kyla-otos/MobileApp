import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
