import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Exemplo() {
    return (
        <View>
            <Text>atividades</Text>

            <TouchableOpacity style={styles.botao}>
            <Text>atividade 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
            <Text>atividade 8</Text>
            </TouchableOpacity>
        </View>
    );
}
