import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../../assets/nobru.jpg';
import img2 from '../../../assets/batatas-origem.jpg';
import img3 from '../../../assets/ll.png';
import img4 from '../../../assets/kk.jpg';


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'nobru apelau '} img={img1} valor={'350,00'}>nobrus apelau.</Card>
            <Card titulo={'batatas kjk'} img={img2} valor={'3800,00'}>batatas</Card>
            <Card titulo={'suco de laranja'} img={img3} valor={'2,00'}>um suco muito bão</Card>
            <Card titulo={'e mole'} img={img4} valor={'1,000,000,00'}>e mole </Card>
        </View>
    );
}

export default Atividade2;

