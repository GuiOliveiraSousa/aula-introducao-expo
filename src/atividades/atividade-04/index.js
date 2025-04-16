import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Atividade4 () {
  const[txtExibido, setTxtExibido] = useState('');
  const[txtInserido1, setTxtInserido1] = useState('');
  const[txtInserido2, setTxtInserido2] = useState('');

  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>Atividade 4</Text>

      <Text style={styles.nomesobrenome}>Nome</Text>
      <TextInput style={styles.input} 
      value ={txtInserido1}
        onChangeText={(valor) =>setTxtInserido1(valor)}/>

      <Text style={styles.nomesobrenome}>Sobrenome</Text>
      <TextInput style={styles.input} 
        value ={txtInserido2}
        onChangeText={(valor) =>setTxtInserido2(valor)}/>

      <Text style={styles.texto}> {txtExibido}</Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(  txtInserido1 + ' ' + txtInserido2)
          setTxtInserido1('')
          setTxtInserido2('');
        }}>
        <Text style={styles.txtBotao}>Exibir texto 
        </Text>

        </TouchableOpacity>

        

    </View>

  );
}

export default Atividade4; // Exportando o componente Exemplo1