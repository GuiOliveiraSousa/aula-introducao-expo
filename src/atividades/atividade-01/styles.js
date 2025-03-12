import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        
     
    },
    título: {
        fontSize: RFPercentage(3),
        fontStyle: 'bold',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
        color: 'orange',
        
    },
    texto : {
        fontSize: RFPercentage(2.2),
        color: 'orange',
    },
    título2: {
        fontSize: RFPercentage(3),
        fontStyle: 'bold',
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
        color: 'blue',
        
    },
    texto2: {
        fontSize: RFPercentage(2.2),
        color: 'blue',
    }

    
});

export default styles;