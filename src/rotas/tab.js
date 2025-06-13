import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import tab from "../rotas/tab";
import sobre from "../exemplos/sobre";

const TabNavigation = createBottomTabNavigator();

export default function Tab() {
    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Tab" component={Tab} />
            <TabNavigation.Screen name="Sobre" component={sobre} />
        </TabNavigation.Navigator>
    );
}