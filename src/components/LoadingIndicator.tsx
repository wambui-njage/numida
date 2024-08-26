// components/LoadingIndicator.tsx

import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '../styles/colors'; 
import { LoadingIndicatorProps } from '../types/ComponentProps';


const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'large',
  color = colors.primary,
}) => {

  return  <ActivityIndicator size={size} color={color} />
  
  
};


export default LoadingIndicator;
