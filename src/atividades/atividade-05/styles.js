import { Button, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'white',
    padding: 8,
    flex: 1,
    justifyContent: 'center',

     
    },
    paragraph: {
      margin: 6,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#E91E63',
    },



    txtSaida: {
        margin: 6, 
        fontSize: 22,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: '#E91E63',
    },

    txtEntrada: {
     borderWidth: 4,
     textAlign: 'center',
     fontSize: 22,
     borderColor: '#E91E63',
     height: 60,
     width: '100%',
     color: '#E53935',
     borderRadius: 10,
     marginTop: 10,
    },

    button: {
       backgroundColor: 'E91E63',
       height: 40,
       justifyContent: 'center',
       borderRadius: 10,
       marginTop: 20,
       
    },

    textButton: {
        fontSize: 22,
        color: 'FF80AB',
        textAlign: 'center',
    },

    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'C51162',
      
    },
    botao: {
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        
    },


});

export default styles;