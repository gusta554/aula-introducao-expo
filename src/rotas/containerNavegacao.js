import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Drawer} from '../rotas/drawer';

export default function Navegacao(){
    return(
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    );
}