import { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from '../../contexts/AuthContext';

export default function Logout() {

    const { signOut, user } = useContext(AuthContext)


    return (
        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity 
                onPress={() => signOut()} 
                style={{ 
                    backgroundColor: '#009688', 
                    width: '90%',
                    height: 55, 
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}