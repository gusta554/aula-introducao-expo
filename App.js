import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Exemplo1 from './src/exemplos/ex-01';


//atividade 1
import Atividade1 from './src/atividades/atividade-01';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
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