import React, { useState } from 'react';
import { View, Text, _View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export function Exemplo5 () {
    const [n1, setNum1] = useState('0');
    const [n2, setNum2] = useState('0');
    const [total, setTotal] = useState('');
    function soma() {
        setTotal(n1 + n2);
        function soma() {
            const conta = parseInt(n1) + parseInt(n2);
            setTotal(conta.toString());
        }

    }
        return (
    
        <View style={styles.container}>
                <Text style={styles.paragraph}>Exemplo 5</Text>
                <Text style={styles.txtSaida}>calculadora basica </Text>

                <Text style={styles.textLabel}> 1º numero</Text>
                <TextInput style={styles.txtEntrada} 
                onChangeText={ (entrada) => setNum1(entrada) }
                value={n1}
                />

                <Text style={styles.txtSaida}> + </Text>

                <Text style={styles.textLabel}> 2º numero</Text>
                <TextInput style={styles.txtEntrada} 
                onChangeText={ (entrada) => setNum2(entrada) } 
                value={n2}/>

                <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

                <Text style={styles.textLabel}> Total </Text>
                <TextInput 
                    style={styles.txtEntrada}
                    editable={false}
                    value={total}
                    />

                <TouchableOpacity style={styles.button} onPress={() => soma()}>
                    <Text style={styles.textButton}> + </Text>
                </TouchableOpacity>
        </View>
        
    );
}

export default Exemplo5;