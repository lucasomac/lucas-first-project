import React from 'react';
import {ScrollView, Text} from 'react-native';
import CustomImage from '../../components/CustomImage'
import regigigas from '../../../assets/486.png';
import GlobalStyles from './../../components/GlobalStyles';

const heatran = require('../../../assets/485.png');
const giratina = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png";
// const hydration = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/489.svg";

export default function Imagens() {
    return (
        <>
            <ScrollView style={GlobalStyles.scrollView}>
                <Text style={GlobalStyles.tituloView}>
                    Três formas de inserir imagens
                </Text>
                <CustomImage fromWeb={false} image={heatran}
                             title={"Imagem local do Pokémon Heatran com require"}
                             width={250}
                             height={250}/>
                <CustomImage fromWeb={false} image={regigigas}
                             title={"Imagem local do Pokémon Regigigas com import"}
                             width={250}
                             height={250}/>
                <CustomImage fromWeb={true} image={giratina}
                             title={"Imagem do Pokémon Giratina com uri"}
                             width={250}
                             height={250}/>
            </ScrollView>
        </>
    );
}