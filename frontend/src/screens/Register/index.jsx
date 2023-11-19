import { styles } from './styles';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
export default function Register() {

    const { signUp, loadingRegister } = useContext(AuthContext)
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {

        if (name === '' || email === '' || password === '') {
            return Alert.alert('Preencha todos os campos!')
        }
        
        await signUp(name, email, password)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Image source={require('../../../assets/moeda.png')} style={styles.image} />
            </View>

            <KeyboardAvoidingView style={styles.content} behavior='padding'>
                <Text style={styles.title}>Sign Up</Text>

                <View style={styles.box}>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize='none'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />


                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegister}
                        activeOpacity={0.9}
                    >

                        {
                            loadingRegister ? (
                                <ActivityIndicator size={35} color="#FFF" />
                            ) : (
                                <Text style={styles.buttonText}>Cadastrar</Text>
                            )
                        }

                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.link} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.linkText}>Já tem conta? <Text style={styles.linkGreen}>Faça login</Text></Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}