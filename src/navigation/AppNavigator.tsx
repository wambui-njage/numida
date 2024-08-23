import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import ApplyForm from '../screens/ApplyForm';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ApplyForm" component={ApplyForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
