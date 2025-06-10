import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Exemplos() {
  return (
    
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplos</Text>
      
        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 1</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 2</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 3</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 4</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 5</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 6</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 7</Text>
            </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
            <Text>Exemplos 8</Text>
            </TouchableOpacity>    

    </View>
  );
}