import * as ImagePicker from 'expo-image-picker';
import api from "../../services/api";
import { Alert } from 'react-native';

// Função para Salvar a foto no Banco de dados
// =============================================
export const saveImage = async (setLoading, user, image, uri, setUser) => {
    setLoading(true)
    try {
        let user_id = user.id
        const formData = new FormData();
        formData.append('user_id', user_id)
        const extend = image.split('.')[1]
        formData.append('avatar', JSON.parse(JSON.stringify({
            name: image,
            uri: uri,
            type: `image/${extend}`
        })))
        const response = await api.post('/avatar', formData, {
            headers: { 'Accept': 'application/json', "content-type": 'multipart/form-data' }
        })
        setUser(response.data)
        Alert.alert('Salvo com sucesso!')
    } catch (error) {
        console.log(error)
    }
    finally {
        setLoading(false)
    }
}
// Função para abrir a galeria de fotos e selecionar outra
// =========================================================
export const changeImage = async (setImage, setUri) => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
        Alert.alert('Permissão necessária', 'Permita que sua aplicação acesse imagens')
    } else {
        const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            base64: false,
            aspect: [4, 4],
            quality: 1
        });

        if (canceled) {
            Alert.alert('Operação cancelada');
        } else {
            const filename = assets[0].uri.substring(assets[0].uri.lastIndexOf('/') + 1, assets[0].uri.length)
            setImage(filename)
            setUri(assets[0].uri)
        }
    }
}