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

import TelaPagamentosApp from './screens/PerfilTelas/PerTelaPagamentos';
import TelaNotificacoesApp from './screens/PerfilTelas/PerTelaNotificacoes';
import TelaCuponsApp from './screens/PerfilTelas/PerTelaCupons';
import TelaEnderecosApp from './screens/PerfilTelas/PerTelaEnderecos'
import TelaAjudaApp from './screens/PerfilTelas/PerTelaAjuda';
import TelaConfiguracoesApp from './screens/PerfilTelas/PerTelaConfiguracoes';
import TelaSegurancaApp from './screens/PerfilTelas/PerTelaSeguranca';

import TelaSugestoes from './components/Home/Sugestoes';
import TelaVerMais from './components/Cards/TelaVerMais';
import TelaCardProduto from './components/Cards/CardProduto';

const BottomTab = createBottomTabNavigator();
const PerfilStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SugestoesStack = createNativeStackNavigator();
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

function TelaHomeRoutesApp() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={TelaHomeApp} />
      <HomeStack.Screen
        name="TelaVerMais"
        component={TelaVerMais}
        options={{ headerTitle: 'Outras opções'}}
      />
      <HomeStack.Screen
        name="TelaCardProduto"
        component={TelaCardProduto}
        options={{ headerTitle: 'Produtos'}}
      />
    </HomeStack.Navigator>
  );
}

function TelaPerfilRoutesApp() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen 
        name="Perfil" 
        component={TelaPerfilApp} 
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
            
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <PerfilStack.Screen
        name="TelaNotificacoesApp"
        component={TelaNotificacoesApp}
        options={{ headerTitle: 'Notificações' }}
      />

      <PerfilStack.Screen
        name="TelaPagamentosApp"
        component={TelaPagamentosApp}
        options={{ headerTitle: 'Pagamentos' }}
      />

      <PerfilStack.Screen
        name="TelaCuponsApp"
        component={TelaCuponsApp}
        options={{ headerTitle: 'Cupons' }}
      />

      <PerfilStack.Screen
        name="TelaEnderecosApp"
        component={TelaEnderecosApp}
        options={{ headerTitle: 'Enderecos' }}
      />

      <PerfilStack.Screen
        name="TelaAjudaApp"
        component={TelaAjudaApp}
        options={{ headerTitle: 'Ajuda' }}
      />

      <PerfilStack.Screen
        name="TelaConfiguracoesApp"
        component={TelaConfiguracoesApp}
        options={{ headerTitle: 'Configurações' }}
      />

      <PerfilStack.Screen
        name="TelaSegurancaApp"
        component={TelaSegurancaApp}
        options={{ headerTitle: 'Segurança' }}
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
          component={TelaHomeRoutesApp}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
            headerStyle: {
              backgroundColor: '#FFF',
              
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
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
            headerStyle: {
              backgroundColor: '#FFF',
              
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
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
            headerStyle: {
              backgroundColor: '#FFF',
              
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
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
