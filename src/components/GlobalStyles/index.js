import Constants from "expo-constants";
import {StyleSheet} from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC300',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    tituloView: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 8,
        textAlign: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statusBar: {
        backgroundColor: '#AD6200'
    },
    scrollView: {
        backgroundColor: '#FFEEEE',
        paddingTop: 8,
        paddingBottom: 8,
        marginHorizontal: 8,
        borderRadius: 16
    }
})
export default GlobalStyles;