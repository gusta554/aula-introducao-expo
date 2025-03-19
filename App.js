import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import mensagem from './src/exemplos/ex-02/mensagem';


//atividade 
import Atividade1 from './src/atividades/atividade-01';
import Atividade2 from './src/atividades/atividade-02';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade2 />
      <StatusBar style="ligth" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    padding: Constants.statusBarHeight || 8,

  },
});