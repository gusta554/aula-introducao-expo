import { View, Text, TextInput, TouchableOpacity } from "react-native";  // Importando os componentes View e Text do pacote react-native

import { useState } from "react";

import styles from "./styles"; // Importando o objeto styles do arquivo styles.js



function Exemplo4 () {
  const[txtInserido, setTxtInserido] = useState('');
  const[txtExibido, setTxtExibido] = useState('');
  const[txtExibidos, setTxtExibidos] = useState('');

  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>Atividade4</Text>
      
      <Text style={styles.texto}>{txtInserido}</Text>
      <Text>Nome</Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}/>
       
        <Text style={styles.texto}>{txtInserido}</Text>
        <Text>Sobrenome</Text>
      <TextInput style={styles.input} 
        onChangeText={(valor) =>setTxtInserido(valor)}/>

      <Text style={styles.texto}> {txtExibido}</Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido);
        }}>
        <Text style={styles.txtBotao}>Exibir texto digitado 
        </Text>

        //------
        
        </TouchableOpacity>

        <Text style={styles.texto}> {txtExibido}</Text>
      <TouchableOpacity style={styles.botao}
        onPress={() => {
          setTxtExibido(txtInserido);
        }}>
        <Text style={styles.txtBotao}>Exibir texto digitado 
        </Text>

        </TouchableOpacity>
        
        

    </View>

  );
}

export default Exemplo4; // Exportando o componente Exemplo1