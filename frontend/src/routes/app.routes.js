import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home'
import New from '../screens/New'
import Profile from '../screens/Profile'
import Avatar from '../screens/Avatar';
import Logout from '../screens/Logout';


export default function AppRoutes() {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "#009688",
                tabBarInactiveTintColor: "#CCC",
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    right: 15,
                    borderRadius: 10,
                    height: 70,
                    backgroundColor: '#FFF',
                    borderTopWidth: 0,
                }
                
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Entypo name="home" size={size} color={color} />
                                <Text>Home</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <AntDesign name="solution1" size={size} color={color} />
                                <Text>Perfil</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='New'
                component={New}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <MaterialCommunityIcons name="pencil" size={size} color={color} />
                                <Text>Registrar</Text>
                            </View>
                        )
                    }
                }}
            />
            
            <Tab.Screen
                name='Avatar'
                component={Avatar}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome name="user-circle" size={size} color={color} />
                                <Text>Avatar</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen

                name='Logout'
                component={Logout}
                options={{
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Entypo name="login" size={size} color={color} />
                                <Text>Sair</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}