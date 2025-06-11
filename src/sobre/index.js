import {View, Text, ImageBackgroundBase, } from 'react-native'

import { ImageBackground } from 'react-native';
import styles from './styles';
import img from '../../assets/react.png';


function Sobre(){
    return(
        <View style={styles.container}>
            <ImageBackground source={img}
                RezizeMode="contain"
                imageStyle={{ TouchableOpacity: 0.5}}
                style={styles.image}>
                <Text style={styles.titulo}>Sobre</Text>
            <Text style={styles.texto}>Aula de react native com expo</Text>
            <Text style={styles.texto}>Exemplos e Atividades </Text> 
            </ImageBackground>
            
        </View>
    );

}

export default Sobre;