import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Sobre from '../sobre';
import Tab from './tab';



const DrawerNavigation = createDrawerNavigator();
export default function Drawer() {
   return (
  <DrawerNavigation.Navigator>
   <DrawerNavigation.Screen name="Tab" component={Tab} />
    <DrawerNavigation.Screen name="Sobre" component={Sobre} />
  </DrawerNavigation.Navigator>
  );
};


