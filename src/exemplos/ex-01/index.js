import {View, Text} from 'react-native'

import styles from './styles';

function Exemplo1(){
    return(
        <View style={styles.container}>
            <Text style={styles.título}>Exemplo 1</Text>
            <Text style={styles.texto}>Aula de reactive-native com Expo</Text>
        </View>
    );

}

export default Exemplo1;