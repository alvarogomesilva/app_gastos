import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    content: {
        marginTop: 30,
        width: '90%'
    },

    title: {
        fontSize: 22,
        textAlign: 'center'
    },

    box: {
        position: 'relative',
        marginVertical: 15,
    },

    icon: {
        fontSize: 25,
        position: 'absolute',
        top: 12,
        left: 15,
        color: '#AAA'
    },

    input: {
        borderColor: '#AAA',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        paddingLeft: 60,
        fontSize: 20
    },

    boxReceive: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },

})