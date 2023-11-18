import { Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

const RadioButton = ({ type, status, ...rest }) => {
    if (type === 'receita') {
        return (
            <TouchableOpacity style={[styles.buttonReceive, status === 'receita'? { backgroundColor: '#FFF'}: {}]}
            
            
                {...rest}
            >
                <Feather name="arrow-up" size={24} style={styles.textGreen} />
                <Text style={styles.textGreen}>Receita</Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={[styles.buttonReceive, status === 'despesa'? { backgroundColor: '#FFF'}: {}]}
                {...rest}
            >
                <Feather name="arrow-down" size={24} style={styles.textRed} />
                <Text style={styles.textRed}>Despesa</Text>
            </TouchableOpacity>
        )
    }
}

export default RadioButton;