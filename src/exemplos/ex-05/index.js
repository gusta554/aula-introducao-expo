import React, { useState } from 'react';
import { View, Text, _View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export function Exemplo5 () {
    const [n1, setNum1] = useState('');
    const [n2, setNum2] = useState('');
    const [total, setTotal] = useState('');
    function somar() {

            setTotal(parseFloat(n1) + parseFloat(n2));
    }

    function subtrair() {
       
        setTotal(parseFloat(n1) - parseFloat(n2));
    }
    
    function multiplicar() {
        
        setTotal(parseFloat(n1) * parseFloat(n2));
    }

    function dividir() {
        setTotal(parseFloat(n1) / parseFloat(n2));

    }
    {


    }
        return (
    
        <View style={styles.container}>
                <Text style={styles.paragraph}>Exemplo 5</Text>
                <Text style={styles.txtSaida}>calculadora basica </Text>

                <Text style={styles.textLabel}> 1º numero</Text>
                <TextInput style={styles.txtEntrada} 
                keyboardType="numeric"
                onChangeText={ (entrada) => setNum1(entrada) }
                value={n1.toString()}
                />

                <Text style={styles.txtSaida}>  </Text>

                <Text style={styles.textLabel}> 2º numero</Text>
                <TextInput style={styles.txtEntrada}
                keyboardType="numeric"
                onChangeText={ (entrada) => setNum2(entrada) } 
                value={n2.toString()}/>

                <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

                <Text style={styles.textLabel}> Total </Text>
                <TextInput 
                    style={styles.txtEntrada}
                    editable={false}
                    value={total.toString()}
                    />

                <View>
                <TouchableOpacity style={styles.button} onPress={somar}>
                    <Text style={styles.textButton}> + </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={subtrair}>
                    <Text style={styles.textButton}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={multiplicar}>
                    <Text style={styles.textButton}> * </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={dividir}>
                    <Text style={styles.textButton}> / </Text>
                </TouchableOpacity>
                </View>
        </View>
        
    );
}

export default Exemplo5;