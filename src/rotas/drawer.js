import { createDrawerNavigator } from "@react-navigation/drawer";

import Atividades from "../atividades/atividade-08";
import sobre from "../exemplos/sobre";

const DrawerNavigstion = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigstion.Navigator>
            <DrawerNavigstion.Screen name="Atividades" component={Atividades} />
            <DrawerNavigstion.Screen name="Sobre" component={sobre} />
        </DrawerNavigstion.Navigator>
    );
}