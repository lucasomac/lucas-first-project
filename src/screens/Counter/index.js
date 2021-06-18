import React, {useState} from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./styles";

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Text style={styles.title}>Você clicou {count}{(count !== 1) ? ' vezes' : ' vez'}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text
                    style={styles.buttonText}>{count === 0 ? 'Clique aqui' : `Cliquei aqui ${count}${count === 1 ? ' vez' : ' vezes'}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReset} onPress={() => setCount(0)}>
                <Text style={styles.buttonText}>RESETAR</Text>
            </TouchableOpacity>
        </>
    );
}