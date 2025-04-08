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
        color: '#f00065', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: '#f00065', 
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: RFPercentage(5),
    }, 
    numero: {
        fontSize: RFPercentage(4), 
        color: 'coral',
        margin: RFPercentage(2)
    }, 
    botao: {
        backgroundColor: '#f00065', 
        width: '20%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        borderWidth: 3,
        borderColor: 'black',
    }, 
    txtBotao: {
        fontSize: RFPercentage(2), 
        color: '#fafafa', 
        fontWeight: 'bold', 
        letterSpacing: 1.5,
    },
    adicionar: {
        backgroundColor: '#f00065', 
        width: '20%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 3, 
        padding: RFPercentage(1),
        //marginTop: RFPercentage(2),
    },
    zerar: {
        backgroundColor: '#f00065', 
        width: '20%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderWidth: 3, 
        padding: RFPercentage(1),
        marginTop: RFPercentage(2),
    },
});

export default styles;

