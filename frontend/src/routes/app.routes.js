import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home'
import New from '../screens/New'
import Profile from '../screens/Profile'
import Avatar from '../screens/Avatar';
import Logout from '../screens/Logout';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function AppRoutes() {
    const { signOut } = useContext(AuthContext)
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
                    height: 60,
                    backgroundColor: '#FFF',
                    borderTopWidth: 0,
                },


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
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#009688',
                                borderRadius: '50%',
                                padding: 5
                            }}>
                                <MaterialCommunityIcons name="pencil" size={35} color="#FFF" />
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
                            <TouchableOpacity 
                                activeOpacity={0.9}
                                onPress={() => Alert.alert('Deseja realmente sair?', undefined, [
                                    {
                                        text: 'Sim',
                                        onPress: () => signOut()
                                    },
                                    {
                                        text: 'Não'
                                    }
                                ])}
                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Entypo name="login" size={size} color={color} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}