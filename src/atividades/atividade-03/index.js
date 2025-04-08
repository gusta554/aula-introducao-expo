import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo3() {

    const [num, setNum] = useState(0);

    function handleAtualizaState () {
        setNum(num + 1);
        
    }
    
    function handlesubtrair() {
        setNum(num - 1);
        
    }
    function handlzerar () {
        setNum( 0);
        
    }

    const handleOutroJeitoFuncao = () => {
        Alert.alert('Título', 'Texto mensagem', [
            {
                text: 'Meu texto',
                onPress: () => Alert.alert('Tchau'),
                style: 'default',
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>
            <Text style={styles.texto}>contador</Text>
            <View style={styles.botaoAlert}>
                
            <TouchableOpacity style={styles.botao} onPress={handlesubtrair}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
            <Text style={styles.numero}>{num}</Text>
            <TouchableOpacity style={styles.adicionar} onPress={handleAtualizaState}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.zerar} onPress={handlzerar}>
                <Text style={styles.txtBotao}>zerar</Text>
            </TouchableOpacity>

             

        </View>
    );
}

export default Exemplo3;

