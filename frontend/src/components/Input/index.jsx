import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';


const Input = ({name, placeholder, value, ...rest }) => {
    return (
        <View style={styles.box}>
            <Feather name={name} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                { ...rest }
            />
        </View>
    )
}

export default Input;