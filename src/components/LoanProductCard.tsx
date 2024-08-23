import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import globalStyles from '../styles/globalStyles';
import colors from '../styles/colors';
import { LoanProduct } from '../types/LoanProduct';

interface LoanProductCardProps {
  product: LoanProduct;
  isActive: boolean;
  onPress: () => void;
}

const LoanProductCard: React.FC<LoanProductCardProps> = ({ product, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        globalStyles.card,
        { backgroundColor: isActive ? colors.lighterAccent : 'white' }
      ]}
      onPress={onPress}
    >
      <View style={globalStyles.cardHeader}>
        <Text style={globalStyles.subtitle}>{product.name}</Text>
      </View>
      <View style={globalStyles.cardContent}>
        <View style={globalStyles.cardDetails}>
          <Text>Maximum Amount:</Text>
          <Text style={globalStyles.accentHeader}>
            ${product.maximumAmount.toLocaleString()}
          </Text>
          <Text>Interest: {product.interestRate}%</Text>
        </View>
        <View style={globalStyles.cardActions}>
          <TouchableOpacity style={globalStyles.learnMoreButton}>
            <Text style={globalStyles.subText}>Learn More</Text>
            <AntDesign name="arrowright" size={15} color={colors.accentGreen} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LoanProductCard;
