import React from 'react';

// Fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from '@react-navigation/native';
// Importando as funções da rota stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT PAGES
import home from './src/pages/home';
import login from './src/pages/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={home} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
