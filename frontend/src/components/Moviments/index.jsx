import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import currencyFormat from "../../utils/currencyFormat";

const Moviments = ({ data, loading, deleteItem }) => {

    
    if (loading) {
        return <ActivityIndicator size="large" color="#000" />
    }

    return (

        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.content}>
                        <Text>{item.type}</Text>
                        <Text>{item.description}</Text>
                        <Text>{currencyFormat(item.value)}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        
    },

    content: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20
    }
})

export default Moviments;