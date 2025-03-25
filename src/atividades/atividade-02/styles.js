import {  StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flex: 1,
        alignItems: 'left',
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
    imagem: {
        height: RFPercentage(16),
        width: RFPercentage(22),
        width: '26%',
        resizeMode: 'center',
        borderRadius: 15,
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        },
    text: {
        fontSize: RFPercentage(5),
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'deepskyblue',
        marginTop: 10,
        marginBottom: 10,
        width: '80%',
        textAlign: 'right',
        textAlignVertical: 'right', 
    },
   
    
});

export default styles;