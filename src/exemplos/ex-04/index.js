import {View, Text, TextInput } from 'react-native'

import {useState} from 'react';

import styles from './styles';



function Exemplo4(){

    const [txtInserido, setTxtInserido] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.título}>Exemplo 4</Text>
            <Text style={styles.texto}>Aula de reactive-native com Expo</Text>
            <TextInput style={styles.input}/>
        </View>
    );

}

export default Exemplo4;