import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { HeaderProps } from '../types/ComponentProps';


const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={globalStyles.dashboardHeaderContainer}>
      <Text style={globalStyles.header}>{title}</Text>
    </View>
  );
};

export default Header;
