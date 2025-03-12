import {  StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a7ffff',
        padding: 8,
        flex: 1,
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'darkviolet',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'red',
    },
    texto: {
        fontSize: RFPercentage(2.2),
        color: 'blue',
    },
    titulo2: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: 'violet',
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        width: '100%',
        height: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'green',
    },
    texto2: {
        fontSize: RFPercentage(2.2),
        color: '#e81e4a',
    },
});

export default styles;