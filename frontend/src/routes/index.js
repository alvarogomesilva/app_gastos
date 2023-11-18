
import AuthRoutes from './auth.routes'
import AppRoutes from "./app.routes"
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { ActivityIndicator, View } from 'react-native'


export default function Routes() {

    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: '#FFF'
                 }}>

                <ActivityIndicator size="large" color="green"/>
            </View>
        )
    }

    return signed ? <AppRoutes/> : <AuthRoutes />

}