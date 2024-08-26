import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import globalStyles from '../styles/globalStyles';
import colors from '../styles/colors';
import { LoanProductCardProps } from '../types/Loan';
import LoanProductModal from './LoanProductModal';


const LoanProductCard: React.FC<LoanProductCardProps> = ({ product, isActive, onPress }) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <TouchableOpacity
      style={[
        globalStyles.card,
        { backgroundColor: isActive ? colors.secondary : 'white' }
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
          <TouchableOpacity style={globalStyles.learnMoreButton} onPress={() => setModalVisible(true)}>
            <Text style={globalStyles.subText}>Learn More</Text>
            <AntDesign name="arrowright" size={15} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
    <LoanProductModal
    visible={modalVisible}
    product={product}
    onClose={() => setModalVisible(false)}
  />
  </>
  );
};

export default LoanProductCard;
