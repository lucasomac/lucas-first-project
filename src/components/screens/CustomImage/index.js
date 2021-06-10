import {Image, Text, View} from "react-native";
import React from "react";
import styles from "./styles";
import {SvgUri, SvgXml} from "react-native-svg";

export default function ({fromWeb, isSvg, image, title, width, height}) {
    return (
        <>
            <Text style={styles.tituloImage}>                {title}            </Text>
            {fromWeb || isSvg || <Image source={image} style={{width: width, height: height, alignSelf: 'center'}}/>}
            {fromWeb || !isSvg || <SvgXml width={width} height={height} xml={image}/>}
            {!fromWeb || isSvg ||
            <Image source={{uri: image}} style={{width: width, height: height, alignSelf: 'center'}}/>}
            {!fromWeb || !isSvg ||
            <View style={styles.svgImage}><SvgUri width={width} height={height} uri={image}/></View>}
        </>
    );
}
