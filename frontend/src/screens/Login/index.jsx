import { styles } from './styles';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {

    const { signIn, loadingAuth } = useContext(AuthContext)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        await signIn(email, password)
    }

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Image source={require('../../../assets/moeda.png')} style={styles.image} />
            </View>

            <KeyboardAvoidingView style={styles.content} behavior='padding'>
                <Text style={styles.title}>Sign In</Text>

                <View style={styles.box}>

                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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
                        onPress={handleLogin}
                        activeOpacity={0.9}
                    >
                        {
                            loadingAuth ? (
                                <ActivityIndicator size={35} color="#FFF"/>
                            ) : (
                                <Text style={styles.buttonText}>Acessar</Text>
                            )
                        }

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.linkText}>Não possui conta? <Text style={styles.linkGreen}>Cadastre-se</Text></Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}