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

                <Submit
                    title="Atualizar"
                    loading={loading}
                    onPress={handleUpdateUser}
                />

            </KeyboardAvoidingView>
        </View>
    )
}