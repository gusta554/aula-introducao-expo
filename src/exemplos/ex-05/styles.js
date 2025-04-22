import {  StyleSheet } from 'react-native';
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
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
       
    },
    texto: {
        color: 'deepskyblue',
    },
    txtSaida: {
        fontSize: 22,
        margin: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e91e63',
    },
    txtEntrada: {
       borderWidth: 4,
       textAlign: 'center',
       fontSize: 22,
       borderColor: '#e91e63',
       height: 60,
       width: '100%',
        color:'e53935',
         borderRadius: 10,
         marginTop: 10,
    },
    button: {
        backgroundColor: '#e91e63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    textLabel: {
        fontSize: 16,
        color: '#c51162',
        fontWeight: 'bold',
    },
    textButton: {
        fontSize: 22,
        color: '#c51162',
        fontWeight: 'bold',
    },

    
});

export default styles;