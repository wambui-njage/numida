import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import { CustomButtonProps } from '../types/ComponentProps';


const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress}) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{text}</Text>
     
    </TouchableOpacity>
  );
};

export default CustomButton;
