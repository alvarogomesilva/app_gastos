import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';

export default function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>

            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            
        </Stack.Navigator>
    )
}