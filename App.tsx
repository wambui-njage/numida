import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import useLoadFonts from './src/hooks/useLoadFonts';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <AppNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
