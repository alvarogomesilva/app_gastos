import { Image, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import { styles } from "./styles";

const Photo = ({ onPress, image, uri, photo }) => {
    
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                {
                    image ?
                        (
                            <Image source={{ uri: uri }} style={styles.imageBig} />
                        ) :
                        (
                            <FontAwesome name="user-circle" size={250} color="black" />
                        )
                }
            </TouchableOpacity>
        )
    } else {
        return (
            photo ? (
                <Image source={{ uri: photo }} style={styles.imageSmall} />
            ) : (
                <FontAwesome name="user-circle" size={100} color="black" />
            )
        )
    }


}

export default Photo;