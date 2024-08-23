import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import colors from '../styles/colors';
import { BaseLayoutProps } from '../types/inferfaces';




const BaseLayout: React.FC<BaseLayoutProps> = ({ children, style }) => {


  return (
    <SafeAreaView style={[styles.container, style]}>

        {children}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: colors.white
  }
});

export default BaseLayout;
