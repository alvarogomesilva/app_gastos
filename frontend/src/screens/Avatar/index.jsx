import { Text, View } from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Submit from "../../components/Submit";
import Photo from "../../components/Photo";
import { changeImage, saveImage } from "./util";

export default function Avatar() {

    const { user, setUser } = useContext(AuthContext)

    const [image, setImage] = useState(user.photo)
    const [uri, setUri] = useState(`http://192.168.0.70:3000/files/${user.photo}`)
    const [loading, setLoading] = useState(false)

    const handleImage = async () => await changeImage(setImage, setUri)
    const handleUpdateAvatar = async () => await saveImage(setLoading, user, image, uri, setUser)
    
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.title}>Seu Avatar</Text>

                <Photo 
                    onPress={handleImage}
                    image={image}
                    uri={uri}
                />

                <Submit
                    title="Salvar"
                    loading={loading}
                    onPress={handleUpdateAvatar}
                />
            </View>
        </View>
    )
}