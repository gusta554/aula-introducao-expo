import { View, Text, Button } from 'react-native';

import styles from './styles';

function Exemplo3 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Exemplo 3</Text>
                <Text style={styles.texto}>variáveis vs states</Text>
                <Button
                onPress={() => {}}
                title='alerta'
                color='deepskyblue'
                accessibilityLabel='Mensaagem de alerta'
                />
        </View>
    );
}

export default Exemplo3;