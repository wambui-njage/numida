import React from 'react';
import Toast from 'react-native-toast-message';
//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//redux and store
import { store } from '../store';
import { Provider } from 'react-redux';
//screens
import ApplyForm from '../screens/ApplyForm';
import Dashboard from '../screens/Dashboard';
//apollo
import client from '../utils/apolloClient';
import { ApolloProvider } from '@apollo/client';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ApplyForm" component={ApplyForm} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};

export default AppNavigator;
