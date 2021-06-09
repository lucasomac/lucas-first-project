import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomImage from './src/components/screens/CustomImage'
import regigigas from './assets/486.png';
import Styles from "./src/Styles";
import {StatusBar} from "expo-status-bar";

const heatran = require('./assets/485.png');
const giratina = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png";
const hydration = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/489.svg";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style={Styles.statusBar}/>
            <View>
                <Text style={Styles.tituloView}>
                    Três formas de inserir imagens
                </Text>
                <CustomImage fromWeb={false} image={heatran}
                             title={"Imagem local do Pokémon Heatran com require"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={false} image={regigigas}
                             title={"Imagem local do Pokémon Regigigas com import"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={true} image={giratina}
                             title={"Imagem local do Pokémon Giratina com uri"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={true} image={hydration}
                             title={"Imagem local do Pokémon Hydration com uri de imagem em svg"}
                             width={220}
                             height={170}/>
            </View>
        </SafeAreaView>
    );
}
