import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

import Image from '../../../assets/react.png';


function sobre () {
    return(
        <View style={styles.container}>
            <ImageBackground
                source={Image}
                resizeMode='contain'
                imageStyle={{ opacity: 0.5 }}
                style={styles.Image}
            >
                <Text style={styles.titulo}>Sobre</Text>
                <Text style={styles.texto}>aula de react-native com expo</Text>
                <Text style={styles.texto}>Exemplo e atividade</Text>
                </ImageBackground>
        </View>
    );
}

export default sobre;