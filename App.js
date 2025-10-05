import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar todas las pantallas/componentes principales
import LoginRoleScreen from './componentes/LoginRoleScreen';
import WelcomeScreen from './componentes/WelcomeScreen';
import PetSelectionScreen from './componentes/PetSelectionScreen';
import ParentDashboard from './componentes/ParentDashboard';
import LinkAccountScreen from './componentes/LinkAccountScreen';
import ChildDashboard from './componentes/ChildDashboard';

// Crear el stack de navegación
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginRole">
        
        {/* Pantalla para elegir rol */}
        <Stack.Screen
          name="LoginRole"
          component={LoginRoleScreen}
          options={{ title: 'Selecciona Rol' }}
        />

        {/* Flujo para Padre */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Bienvenida' }}
        />
        <Stack.Screen
          name="PetSelection"
          component={PetSelectionScreen}
          options={{ title: 'Selecciona Mascota' }}
        />
        <Stack.Screen
          name="ParentDashboard"
          component={ParentDashboard}
          options={{ title: 'Dashboard Padre' }}
        />

        {/* Flujo para Niño */}
        <Stack.Screen
          name="LinkAccount"
          component={LinkAccountScreen}
          options={{ title: 'Vincular Cuenta' }}
        />
        <Stack.Screen
          name="ChildDashboard"
          component={ChildDashboard}
          options={{ title: 'Dashboard Niño' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}