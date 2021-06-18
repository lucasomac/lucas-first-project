import React from 'react';
import GlobalStyles from "./src/components/GlobalStyles";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from 'react-native-safe-area-context';
import Counter from "./src/screens/Counter";

export default function App() {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <StatusBar style={GlobalStyles.statusBar}/>
            <Counter/>
        </SafeAreaView>
    );
}