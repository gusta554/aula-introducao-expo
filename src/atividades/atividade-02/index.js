import { View, Text, Image} from 'react-native';

import styles from './styles';

import img from '../../../assets/nobru.jpg';

function Atividade2 () {
    return(
        <View style={styles.container}>
                <Text style={styles.titulo}>Atividade2</Text>
                <Image source={img} style={styles.imagem} />  
        </View>
    );
}

export default Atividade2;