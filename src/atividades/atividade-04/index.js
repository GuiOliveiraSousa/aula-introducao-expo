import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Atividade4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtExibido, setTxtExibido] = useState('');

  const[txtInserido1, setTxtInserido1] = useState('');
  const[txtExibido2, setTxtExibido2] = useState('');

  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>Atividade 4</Text>
      <Text style={styles.texto}>{txtInserido}</Text>

      <Text>Nome</Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}/>

      <Text>Sobrenome</Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}/>

      <Text style={styles.texto}> {txtExibido}</Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido);
        }}>
        <Text style={styles.txtBotao}>Exibir texto 
        </Text>

        </TouchableOpacity>

        

    </View>

  );
}

export default Atividade4; // Exportando o componente Exemplo1