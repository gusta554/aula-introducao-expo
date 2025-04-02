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
       margin: RFPercentage(1),
         padding: RFPercentage(1),
            backgroundColor: 'red',
            borderRadius: 10,
      
    },
    numero: {
        fontSize: RFPercentage(2.5),
        color: '#fafafa',
        fontWeight: 'bold',
        
    },
    txtBotao: {
        fontSize: RFPercentage(2.5),
        color: 'purple',
        fontWeight: 'bold',
    },
});

export default styles;

