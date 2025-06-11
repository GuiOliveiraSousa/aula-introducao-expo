import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './drawer';

export default function Drawer() {
  return (
    <NavigationContainer>{
        <Drawer/>
    }</NavigationContainer>
  );
}