import { StyleSheet, TouchableOpacity } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'deepskyblue', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'deepskyblue', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
    }, 
    texto: {
        fontSize: RFPercentage(2.2),  
    }, 

    botaoAlert: {
        width: '100%', 
    },

    adicionar: {
        color: '#fff',
        backgroundColor: 'deepskyblue', 
        padding: 10, 
        borderRadius: 20, 
        marginTop: 10, 
        width: '100%', 
        alignItems: 'center', 
    },

    valor: {
        fontSize: RFPercentage(2.2), 
        color: 'deepskyblue', 
        marginTop: 10, 
    },

});

export default styles;

