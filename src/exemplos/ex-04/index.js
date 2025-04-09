import { useState } from 'react';
import { View, Text, TextInput} from 'react-native';

import styles from './styles';

function Exemplo4 () {

    const [txtInserido, setTxtIserido] = useState('');

    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Exemplo 4</Text>
                <Text style={styles.texto}>aula de react-native com expo</Text>
                <TextInput style={styles.input}/>
        </View>
    );
}

export default Exemplo4;