import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
        alignItems: 'center', 
        borderRadius: 20,
        backgroundColor: 'black',
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
});

export default styles;

