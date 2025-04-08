import { StyleSheet } from 'react-native'; 
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
        color: 'purple', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'purple', 
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
        color: 'purple',  
    }, 
    containerBotao: {
        width: '100%',         
        margin: RFPercentage(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    numero: {
        fontSize: RFPercentage(4), 
        color: 'purple',
        margin: RFPercentage(2)
    }, 
    
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
    adicionar: {
        backgroundColor: 'purple', 
        width: '25%', 
        borderRadius: RFPercentage(8), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin: RFPercentage(2,5),
        borderWidth: 3,
        borderColor: 'black',
    },
    subtrair: {
        backgroundColor: 'purple', 
        width: '25%', 
        borderRadius: RFPercentage(8), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin: RFPercentage(2,5),
        borderWidth: 3,
        borderColor: 'black',
    },
    botaozerar: {
        backgroundColor: 'purple', 
        width: '75%', 
        borderRadius: RFPercentage(8), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin: RFPercentage(2),
        borderWidth: 3,
        borderColor: 'black',
    }, 
});

export default styles;

