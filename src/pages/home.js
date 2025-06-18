import React from 'react';
import { Text, View, Button } from 'react-native';

// IMPORT STYLES
import { styles } from '../styles/styles';

// Quando importamos e useNavigation ele nos retorna uma instância de navegação
// Isso nos permite acessar todos os métodos referente a vanegação (navigate, goBack)
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Boas-vindas ao site!!</Text>

      <Button title="login" onPress={() => navigation.navigate("login")}></Button>
    </View >
  );
}
