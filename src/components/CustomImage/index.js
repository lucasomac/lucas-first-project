import {Image, Text} from "react-native";
import React from "react";
import styles from "./styles";

export default function ({fromWeb, image, title, width, height}) {
    return (
        <>
            <Text style={styles.tituloImage}>                {title}            </Text>
            {fromWeb || <Image source={image} style={{width: width, height: height, alignSelf: 'center'}}/>}
            {!fromWeb || <Image source={{uri: image}} style={{width: width, height: height, alignSelf: 'center'}}/>}
        </>
    );
}
