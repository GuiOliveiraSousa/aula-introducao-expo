import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividade from '../atividades';
import Sobre from '../sobre';



const MyDrawer = createDrawerNavigator({
  screens: {
    Atividade,
    Sobre,
  },
});

