import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import styles from './styles';

 import { useState } from 'react';




export function Atividade5(){
    const [n1, setN1] = useState('0');
    const [n2, setN2] = useState('0');
    const [total, setTotal] = useState('0');

    function somar(){
    setTotal(parseFloat(n1) + parseFloat(n2));
    }
    
    function subtrair(){
        setTotal(parseFloat(n1) - parseFloat(n2));
     }

     function multiplicar(){
        setTotal(parseFloat(n1) * parseFloat(n2));
     }
        

     function dividir(){
        setTotal(parseFloat(n1) / parseFloat(n2));
     }

    

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Atividade 5</Text>

            <Text style={styles.textSaida}>Calculadora básica</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={(entrada) => setN1(entrada)}
                value={n1.toString()}></TextInput>

            

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput style={styles.txtEntrada} onChangeText={(entrada) => setN2(entrada)}
            value={n2.toString()} ></TextInput>

            <Text style={[styles.textSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}>Total</Text>
            <TextInput style={styles.txtEntrada}
            editable={false}
            value={total.toString()} />

            <TouchableOpacity style={styles.botao } onPress={() => somar()}>
                <Text style={styles.textButton}> Calcular </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao } onPress={() => subtrair()}>
                <Text style={styles.textButton}> Subtrair </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.botao } onPress={() => multiplicar()}>
                <Text style={styles.textButton}> Multiplicar </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.botao } onPress={() => dividir()}>
                <Text style={styles.textButton}> Dividir </Text>
            </TouchableOpacity>
        


        </View>
    );

}

export default Atividade5;