import React from 'react';
import Imagens from "./src/screens/Imagens";
import GlobalStyles from "./src/components/GlobalStyles";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style={GlobalStyles.statusBar}/>
            <Imagens/>
        </SafeAreaView>
    );
}
