import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade3() {

    const [num, setNum] = useState(0);

    function handleAdicionar () {
        setNum(num + 1);
        
    }
    function handleSubtrair() {
        setNum(num - 1);
        
    }
    function handleZerar () {
        setNum(0);
        
    }



    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
                text: 'Meu texto',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ])
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <Text style={styles.texto}>Contador</Text>

            <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.subtrair} onPress={handleSubtrair}>
                <Text style={styles.txtBotao}>-1</Text>

            </TouchableOpacity>
            <Text style={styles.numero}>{num}</Text> 
            <TouchableOpacity style={styles.adicionar} onPress={handleAdicionar}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.botaozerar} onPress={handleZerar}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Atividade3;

