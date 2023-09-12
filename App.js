import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaBemVindo from './src/screens/TelaBemVindo';
import TelaCadastro from './src/screens/TelaCadastro';
import TelaLogin from './src/screens/TelaLogin';
import Routes from './src/Routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaBemVindo" component={TelaBemVindo} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="Routes" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}