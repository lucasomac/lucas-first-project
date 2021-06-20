import React from 'react';
import Imc from "./src/screens/Imc";
import GlobalStyles from "./src/components/GlobalStyles";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from "./src/screens/Imc/styles";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={GlobalStyles.statusBar}/>
            <Imc/>
        </SafeAreaView>
    );
}