import React, { useState } from 'react';
import { Text, View, Button, Modal, Alert, ImageBackground } from 'react-native';

// IMPORT STYLES
import { styles } from '../styles/styles';

// Quando importamos e useNavigation ele nos retorna uma instância de navegação
// Isso nos permite acessar todos os métodos referente a vanegação (navigate, goBack)
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [visible, setVisible] = useState(false);

  function confirmacao() {
    const emailConfirm = "pedro@gmail.com";
    const senhaConfirm = "pedro123";
    if (emailConfirm == email && senhaConfirm == senha) {
      navigation.navigate("home");
    } else {
      setVisible(true);

      setTimeout(() => {
        setVisible(false)
      }, 1500);
    }
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require("../images/Minecraft wallpapers 1920x1080.jpg")} resizeMode='cover'> </ImageBackground> */}
      <View style={styles.info}>
        <Text style={styles.textLogin}>Faça login!!</Text>

        <TextInput style={styles.textInput} placeholder='Digite seu email' onChange={event => setEmail(event.target.value)} ></TextInput>
        <TextInput style={styles.textInput} placeholder='Digite sua senha' onChange={event => setSenha(event.target.value)} secureTextEntry={true}></TextInput>

        {visible && <Text style={{ color: "red" }}> SENHA OU EMAIL ERRADOS, TENTE NOVAMENTE</Text>}


        <Button title="home" onPress={confirmacao} styles={styles.button} />
      </View>
    </View>

  );
}
