import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Submit from "../../components/Submit";
import RadioButton from "../../components/RadioButton";
import { saveReceive } from "./util";

export default function New() {

    const { user } = useContext(AuthContext)

    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [value, setValue] = useState('')
    const [type, setType] = useState('receita')
    const [loading, setLoading] = useState(false)

    const handleRegister = async () => {
        if (description === '' || value === '') return Alert.alert('Preencha todos os campos!')
        
        await saveReceive(setLoading, user, description, value, type, date)
        Keyboard.dismiss()
        setDescription('')
        setValue('')
        Alert.alert('Registrado com sucesso!')
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.content} behavior="padding">
                <Text style={styles.title}>Novo Registro</Text>

                <View style={styles.box}>
                    <MaterialCommunityIcons name="subtitles-outline" style={styles.icon} />

                    <TextInput
                        placeholder="Nome do registro"
                        style={styles.input}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                </View>

                <View style={styles.box}>
                    <MaterialIcons name="attach-money" style={styles.icon} />

                    <TextInput
                        placeholder="valor"
                        style={styles.input}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.boxReceive}>

                    <RadioButton
                        type="receita"
                        onPress={() => setType('receita')}
                        status={type}

                    />

                    <RadioButton
                        type="despesa"
                        onPress={() => setType('despesa')}
                        status={type}
                    />

                </View>

                <Submit
                    title="Registrar"
                    loading={loading}
                    onPress={handleRegister}
                />

            </KeyboardAvoidingView>
        </View>
    )
}