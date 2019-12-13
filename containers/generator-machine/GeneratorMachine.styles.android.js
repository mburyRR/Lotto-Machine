import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardGenerator: {
        marginTop: 20
    },
    title: {
        color: theme.color.default,
        textTransform: 'uppercase'
    },
    desc: {
        marginBottom: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: theme.background.primary,
        borderRadius: 0,
        margin: 5,
        marginTop: 15
    },
    buttonLabel : {
        color: theme.color.default
    }
});