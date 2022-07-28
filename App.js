import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LandingPageScreen from './screens/LandingPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ReferScreen from './screens/Refer';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import DrawerItems from './constants/DrawerItens';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
      <Drawer.Navigator
       drawerType="front"
       drawerContentOptions={{
         activeTintColor: '#FC0FC0',
         itemStyle: { marginVertical: 30},
      
       }}

>
       {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           component={
             drawer.name==='Landing Page' ? LandingPageScreen
             : drawer.name==='Login' ? LoginScreen
             : drawer.name==='Cadastro' ? CadastroScreen
                   : ReferScreen
                   
           }
         />)
       }
</Drawer.Navigator>
    </NavigationContainer>
  
  );
}

