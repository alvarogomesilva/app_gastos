import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    top: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    money: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    moeda: {
        width: 60,
        height: 60
    },

    value: {
        fontSize: 60,
        marginVertical: 15,
        marginRight: 20,
        color: '#FFF'
    },

    bottom: {
        flex: 3,
        backgroundColor: '#EEE'
    },

    cards: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    card: {
        top: -40,
        backgroundColor: '#FFF',
        borderRadius: 15,
        width: 180,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardText: {
        flexDirection: 'row',
        alignItems: 'center',
        color: 'green',
        gap: 5
    },

    cardValue: {
        fontSize: 20
    },

    calendar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        top: -20
    },

    calendarBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    title: {
        fontSize: 20
    }

})