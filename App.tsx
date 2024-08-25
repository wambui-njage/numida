import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoadingIndicator from './src/components/LoadingIndicator';
import AppNavigator from './src/navigation/AppNavigator';
import useLoadFonts from './src/hooks/useLoadFonts';

const App = () => {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return (
      //replace with loading lottie animation
      <View style={styles.container}>
        <LoadingIndicator/>
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
