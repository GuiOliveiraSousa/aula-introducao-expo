import { View, Text, Image } from 'react-native';

import styles from './styles';

import Card from './card';

import img1 from '../../../assets/camisa.png';
import img2 from '../../../assets/camisaBordo.png';
import img3 from '../../../assets/camisaBranca.png';
import img4 from '../../../assets/camisaListrada.png';



function Atividade2 () {
    return (
        <View style={styles.container}>
             <Text style={styles.titulo}>SportShop</Text>
            <Card titulo={'Camisa Preta Esportiva'} img={img1} valor={'300,00'}>Camisa DryFit modelo 2025 Slim Mode.</Card>
            <Card titulo={'Camisa Corinthians Bordo'} img={img2} valor={'80,00'}>Camisa Bordo primeira linha.</Card>
            <Card titulo={'Camisa Corinthians Branca'} img={img3} valor={'80,00'}>Camisa Branca, modelo clássico primeira linha.</Card>
            <Card titulo={'Camisa Corinthians Preta Listrada'} img={img4} valor={'50,00'}>Camisa listrada primeira linha.</Card>
        </View>
    );
}

export default Atividade2;