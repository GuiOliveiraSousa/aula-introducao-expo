import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import styles from './styles';

 import { useState } from 'react';




export function Exemplo5(){
    const [n1, setN1] = useState('0');
    const [n2, setN2] = useState('0');
    const [total, setTotal] = useState('0');

    function somar(){
    setTotal(parseFloat(n1) + parseFloat(n2));
    }
    


    

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo 5</Text>

            <Text style={styles.textSaida}>Calculadora básica</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={(entrada) => setN1(entrada)}
                value={n1}></TextInput>

            <Text style={styles.textSaida}> + </Text>

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={(entrada) => setN2(entrada)}
            value={n2} ></TextInput>

            <Text style={[styles.textSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}>Total</Text>
            <TextInput style={styles.txtEntrada}
            editable={false}
            value={total}></TextInput>

            <TouchableOpacity style={styles.botao } onPress={somar}>
                <Text style={styles.txtButton}> Calcular </Text>
            </TouchableOpacity>
        


        </View>
    );

}

export default Exemplo5;