import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import { CustomButtonProps } from '../types/ComponentProps';


const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[globalStyles.button, style]} onPress={onPress}>
      <Text style={[globalStyles.buttonText, textStyle]}>{text}</Text>
     
    </TouchableOpacity>
  );
};

export default CustomButton;
