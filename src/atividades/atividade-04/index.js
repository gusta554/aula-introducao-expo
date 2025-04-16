import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Exemplo4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtExibido, setTxtExibido] = useState('');
  const[txtExibido2, setTxtExibido2] = useState('');
  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>atividade 4</Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}
        value={txtInserido}/>

     
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtExibido2(valor)}
        value={txtExibido2}/>

<Text style={styles.texto}> {txtExibido}</Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido + ' ' + txtExibido2);
          setTxtInserido('');
          setTxtExibido2('');
        }}>
        <Text style={styles.txtBotao}>Exibir texto digitado 
        </Text>

        </TouchableOpacity>

    </View>

  );
}

export default Exemplo4; // Exportando o componente Exemplo1