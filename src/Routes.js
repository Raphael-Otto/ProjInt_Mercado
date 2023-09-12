import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import TelaHomeApp from './screens/TelaHome';
import TelaBuscaApp from './screens/TelaBusca';
import TelaPerfilApp from './screens/TelaPerfil';
import TelaPedidosApp from './screens/TelaPedidos';
import TelaPedidosAntApp from './screens/TelaPedidos';
import TelaPagamentosApp from './screens/TelaPagamentos';

const BottomTab = createBottomTabNavigator();
const PerfilStack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={TelaPedidosApp} />
      <Tab.Screen
        name="PedidosAnteriores"
        component={TelaPedidosAntApp}
        options={{ tabBarLabel: 'Pedidos Anteriores' }}
      />
    </Tab.Navigator>
  );
}

function TelaPerfilRoutesApp() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={TelaPerfilApp} />
      <PerfilStack.Screen
        name="TelaPagamentosApp"
        component={TelaPagamentosApp}
      />
    </PerfilStack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer independent={true}>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
        }}>
        <BottomTab.Screen
          name="Mercado Arco-Íris"
          component={TelaHomeApp}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Busca"
          component={TelaBuscaApp}
          options={{
            tabBarLabel: 'Busca',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={color} size={26} />
            ),
          }}
        />
         <BottomTab.Screen
          name="Pedidos"
          component={PedidosRouter}
          options={{
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="PerfilRoutes"
          component={TelaPerfilRoutesApp}
          options={{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
