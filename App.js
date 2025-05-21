import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

//Exemplos
import Exemplo1 from './src/exemplos/ex-01';

import Atividade1 from './src/atividades/atividade-01';

import Exemplo2 from './src/exemplos/ex-02';

import Mensagem from './src/exemplos/ex-02/mensagem';

import Atividade2 from './src/atividades/atividade-02';

import Exemplo3 from './src/exemplos/ex-03';
import Atividade3 from './src/atividades/atividade-03';
import Exemplo4 from './src/exemplos/ex-04';

import Atividade4 from './src/atividades/atividade-04';

import Exemplo5 from './src/exemplos/ex-05';
import Atividade5 from './src/atividades/atividade-05';
import Exemplo6 from './src/exemplos/ex-06';
import Atividade6 from './src/atividades/atividade-06';

import Exemplo8 from './src/exemplos/ex-08';




export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo8/>
      <StatusBar style="night" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    padding: Constants.statusBarHeight || 8,
  },
});
