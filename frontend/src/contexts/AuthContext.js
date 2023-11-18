import api from '../services/api';
import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loadingRegister, setLoadingRegister] = useState(false)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const [dateNow, setDateNow] = useState(new Date())
 

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@token')
            if (storageUser) {
                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                .catch(() => setUser(null)) 
                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()
    }, [])

    async function signIn(email, password) {
        setLoadingAuth(true)
        try {
            const response = await api.post('/login', { email, password })
            const { id, name, token, photo } = response.data
            

            await AsyncStorage.setItem('@token', token)
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            setUser({ id, name, email, token, photo })


        } catch (error) {
            console.log(error)
        }
        finally {
            setLoadingAuth(false)
        }
    }


    async function signUp(name, email, password) {
        setLoadingRegister(true)
        try {
           await api.post('/create', { name, email, password })
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoadingRegister(false)
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
            .then(() => setUser(null))
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, setUser ,signIn, signUp, signOut, loadingRegister, loadingAuth, loading, dateNow, setDateNow }}>
            {children}
        </AuthContext.Provider>
    )
}
