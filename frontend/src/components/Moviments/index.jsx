import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import currencyFormat from "../../utils/currencyFormat";
import { Feather } from '@expo/vector-icons';

const Moviments = ({ data, loading, deleteItem }) => {


    if (loading) {
        return <ActivityIndicator size="large" color="#000" />
    }

    if (data.length === 0) {
        return <Text style={styles.noMoviment}>Nenhuma movimentação neste dia</Text>
    }

    return (

        <FlatList
            style={styles.container}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.content}>

                        <View style={styles.areaArrow}>
                            <View style={styles.arrow}>
                                {
                                    item.type === 'receita' ?
                                        (<Feather name="arrow-up" size={25} color="green" />) :
                                        (<Feather name="arrow-down" size={25} color="red" />)
                                }

                                <Text style={{
                                    color: item.type === 'receita' ? 'green' : 'red',
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}>
                                    {item.type.toLocaleUpperCase()}</Text>
                            </View>

                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <Text style={{
                            color: item.type === 'receita' ? 'green' : 'red',
                            fontSize: 18
                        }}>
                            {currencyFormat(item.value)}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 90
    },

    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        marginVertical: 15
    },

    arrow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    description: {
        fontSize: 17
    },

    noMoviment: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
        fontSize: 22
    }

})

export default Moviments;