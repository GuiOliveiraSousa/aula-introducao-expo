import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Atividade from '../exemplos';
import Sobre from '../atividades';



const TabNavigation = createBottomTabNavigator();
export default function Tab() {
   return (
  <TabNavigation.Navigator>
   <TabNavigation.Screen name="Exemplos" component={Atividade} />
    <TabNavigation.Screen name="Atividades" component={Sobre} />
  </TabNavigation.Navigator>
  );
};