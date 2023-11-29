import { Alert } from "react-native";
import api from "../../services/api";

const updateUser = async (setLoading, user, name, email, setUser) => {
    setLoading(true)

    if (name === '' || email === '') {
        Alert.alert('Preencha todos os campos!')
        setLoading(false)
        return;
    }

    let user_id = user.id
    try {
        const response = await api.post('/update', { user_id, name, email })
        setUser(response.data)
        Alert.alert('Atualizado com sucesso!')
    } catch (error) {
        console.log(error)
    }
    finally {
        setLoading(false)
    }
}

export default updateUser