import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#FFC300'
        },
        input: {
            backgroundColor: '#E59200',
            borderColor: '#AD6200',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 15,
            marginHorizontal: 30,
            padding: 10,
            color: '#FFF',
            fontSize: 23
        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginHorizontal: 30,
            backgroundColor: '#E59200',
            padding: 10,
            borderRadius: 10,
            borderColor: '#AD6200',
            borderWidth: 1
        },
        textButton: {
            color: '#8D4600',
            fontSize: 25,
            fontWeight: 'bold'
        }
    }
);

export default styles;