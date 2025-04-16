import { StyleSheet } from "react-native"; // Importando o pacote StyleSheet do react-native
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: RFPercentage(3),
    borderRadius: RFPercentage(4),
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'deepskyblue',
    marginTop: 10,
    marginBottom:10,
    padding: 8,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 80,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    color: 'red',
  },
  input:{
    borderWidth: RFPercentage(0.2),
    width: "100%",
    fontSize: RFPercentage(2),
    margin:RFPercentage(2),
    borderRadius:RFPercentage(4),
    borderColor: 'deepskyblue',
    },
    txtBotao: {
      fontSize: RFPercentage(2), 
      color: 'black',  
      fontWeight: 'bold', 
      letterSpacing: 1.5,
  },
  botao: {
        backgroundColor: 'purple', 
        width: '70%', 
        // height: RFPercentage(4), 
        borderRadius: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: RFPercentage(1),
        margin:"30",
        borderWidth: 3,
        bordercolor: "black",
  },
});

export default styles; // Exportando o objeto styles