import React, {useState} from "react";
import Speech from "expo-speech";
import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import CustomImage from '../../components/CustomImage'
import styles from "./styles";
import medica from '../../../assets/medica.png';
import balanca from '../../../assets/balanca.png';

export default function Imc() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    function messageImcSpeech(imc, msg) {
        Speech.speak(`Cálculo do I M CÊ - Resultado I M CÊ = ${imc}\n${msg}`, {language: 'pt-BR'});
    }

    function messageImcAlert(imc, msg) {
        Alert.alert(`Cálculo do IMC - Resultado IMC = ${imc}\n${msg}`);
    }

    function handleSubmit() {
        const alt = parseFloat(altura) / 100;
        const imc = parseFloat(peso) / (alt * alt)

        if (imc <= 0 || alt <= 0 || peso <= 0) {
            Speech.speak('Dados Incorretos!' + 'Por favor, informe os campos. Exemplo: Peso 40(Kg, Altura 150 (cm)', {language: 'pt-BR'});
            Alert.alert('Dados Incorretos!' + 'Por favor, informe os campos. Exemplo: Peso 40(Kg, Altura 150 (cm)');
        } else {
            var message = '';
            if (imc < 17) {
                message = 'Voccẽ está MUITO ABAIXO do peso!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 17 && imc < 18.5) {
                message = 'Voccẽ está ABAIXO do peso!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 18.5 && imc < 25) {
                message = 'Voccẽ está com peso NORMAL!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 25 && imc < 30) {
                message = 'Voccẽ está com SOBREPESO!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 30 && imc < 35) {
                message = 'Voccẽ está OBESO (Ou seja, obesidade grau I!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 35 && imc < 40) {
                message = 'Voccẽ está com OBESIDADE SEVERA (Ou seja, obesidade grau II!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            } else if (imc >= 40) {
                message = 'Voccẽ está com OBESIDADE MÓRBIDA (Ou seja, obesidade grau III!';
                messageImcSpeech(imc, message);
                messageImcAlert(imc, message);
            }
        }
    }

    function handleClear() {
        setPeso('');
        setAltura('');
    }

    return (
        <View>
            <CustomImage
                fromWeb={false}
                image={balanca}
                title={'Calcule seu IMC'}
                width={147}
                height={168}
            />
            <TextInput
                style={styles.input}
                value={peso}
                onChangeText={(peso) => setPeso(peso)}
                placeholder={'Digite o peso (Kg)'}
                keyboardtype='numeric'
            />
            <TextInput
                style={styles.input}
                value={altura}
                onChangeText={(altura) => setAltura(altura)}
                placeholder={'Digite a altura (cm)'}
                keyboardtype='numeric'
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <CustomImage
                    fromWeb={false}
                    image={medica}
                    title={'Calcular'}
                    width={125}
                    height={213}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClear}>
                <Text style={styles.textButton}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
}