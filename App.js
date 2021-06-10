import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomImage from './src/components/screens/CustomImage'
import regigigas from './assets/486.png';
import basculin from './assets/550.svg';
import Styles from "./src/Styles";
import {StatusBar} from "expo-status-bar";

const heatran = require('./assets/485.png');
const giratina = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png";
const hydration = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/489.svg";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style={Styles.statusBar}/>
            <ScrollView style={Styles.scrollView}>
                <Text style={Styles.tituloView}>
                    Três formas de inserir imagens
                </Text>
                <CustomImage fromWeb={false} isSvg={false} image={heatran}
                             title={"Imagem local do Pokémon Heatran com require"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={false} isSvg={false} image={regigigas}
                             title={"Imagem local do Pokémon Regigigas com import"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={true} isSvg={false} image={giratina}
                             title={"Imagem do Pokémon Giratina com uri"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={false} isSvg={true} image={basculin}
                             title={"Imagem local do Pokémon Hydration em svg"}
                             width={220}
                             height={170}/>
                <CustomImage fromWeb={true} isSvg={true} image={hydration}
                             title={"Imagem do Pokémon Hydration com uri em svg"}
                             width={220}
                             height={170}/>
            </ScrollView>
        </SafeAreaView>
    );
}
