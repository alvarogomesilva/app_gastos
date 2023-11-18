import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Submit = ({title, loading, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.button}>
          {
            loading ? 
            (
                <ActivityIndicator color="#FFF" size={35} />
            ) : 
            (
                <Text style={styles.text}>{title}</Text>
            )
          }
        </TouchableOpacity>
    )
}

export default Submit