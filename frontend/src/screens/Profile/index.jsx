import { styles } from "./styles";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import updateUser from "./util";
import Submit from "../../components/Submit";
import Input from "../../components/Input";

export default function Profile() {

    const { user, setUser } = useContext(AuthContext)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUpdateUser = async () => await updateUser(setLoading, user, name, email, setUser)

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView style={styles.content}
                behavior={Platform.OS === 'ios' ? "padding" : ""}
            >
                <Text style={styles.title}>Atualize seu cadastro</Text>

                <Input 
                    name="user"
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    name="mail"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    name="lock"
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Input 
                    name="lock"
                    placeholder="Digite uma nova senha"
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                    secureTextEntry={true}
                />

                <Submit
                    title="Atualizar"
                    loading={loading}
                    onPress={handleUpdateUser}
                />

            </KeyboardAvoidingView>
        </View>
    )
}