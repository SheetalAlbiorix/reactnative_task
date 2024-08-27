import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 80,
    },
    image: {
        width: 72,
        height: 72,
    },
    text: {
        paddingTop: 10,
        fontSize: 23,
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        paddingLeft: 10,
    },
    title: {
        color: '#888888',
        marginTop: 30,
        fontFamily: 'UberMoveTextMedium',
    },
    press: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 28,
        paddingHorizontal: 12,
        paddingVertical: 14,
        alignSelf: 'flex-start',
        marginTop: 40,
    },
    arrow1: {
        color: '#000',
    },
    buttonText: {
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        fontSize: 25,
        marginRight: 10,
    },
});