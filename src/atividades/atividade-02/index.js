import { View, Text, Image } from 'react-native';

import styles from './styles';

import img1 from '../../../assets/camisa.png';

function Atividade2 (props) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade2</Text>
            <View style={styles.productContainer}>
                <Text style={styles.productDescription}>Produto: Camisa Esportiva</Text>
                <Text style={styles.productPrice}>Preço: R$ 49,90</Text>
                <Image source={img1} style={styles.img1} />
            </View>
        </View>
    );
}

export default Atividade2;