import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009688',
        
    },

    top: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 100,
        height: 100
    },


    content: {
        flex: 6,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 125
    },

    title: {
        color: '#009688',
        fontSize: 40,
        fontWeight: 'bold'
    },

    box: {
        width: '85%',
    },

    input: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: '#F6F7FB',
        marginVertical: 20,
        padding: 12,
        fontSize: 18,
        borderRadius: 10
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009688',
        marginTop: 20,
        borderRadius: 10,
        height: 55
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    link: {
        justifyContent: 'center',
        marginVertical: 15,
        alignItems: 'center'
    },

    linkText: {
        fontSize: 18
    },

    linkGreen: {
        color: '#009688',
        fontWeight: 'bold'
    }

})