import {View, Text} from 'react-native'

import styles from './styles';

function Atividade1(){
    return(
        <View style={styles.container}>
            <Text style={styles.título}>Charizard</Text>
            <Text style={styles.texto}>Charizard, conhecido como Lizardon (リザードン, Rizadon) no Japão, é uma criatura fictícia da franquia Pokémon que pertence a Nintendo e Game Freak.</Text>

            <Text style={styles.título2}>Blastoise</Text>
            <Text style={styles.texto2}>Blastoise, conhecido como Kamex (カメック
            , Kamekkusu) no Japão, é uma criatura fictícia da franquia Pokémon que pertence a Nintendo e Game Freak.</Text>
        </View>

    );

}

export default Atividade1;