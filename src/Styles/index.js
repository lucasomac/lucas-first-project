import Constants from "expo-constants";
import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC300',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    tituloView: {
        fontSize: 18,
        fontWeight: 'bold',
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
    }
})
export default Styles;
