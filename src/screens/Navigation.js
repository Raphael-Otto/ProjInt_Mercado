import React from 'react';
import TelaHome from '../screens/TelaHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function Navigation({navigation}){
    
    return (
        <Stack.Navigator initialRouteName="TelaHome">
            <Stack.Screen
                name="TelaHome"
                component={TelaHome}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}