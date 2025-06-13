import { View, Text, _View } from 'react-native';

import styles from './styles';

function Exemplo1 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Exemplo 1</Text>
                <Text style={styles.texto}>aula de react-native com expo</Text>
        </View>
    );
}

export default Exemplo1;