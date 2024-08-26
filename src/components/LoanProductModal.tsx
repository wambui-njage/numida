// src/components/LoanProductModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LoanProductModalProps } from '../types/ComponentProps';



const LoanProductModal: React.FC<LoanProductModalProps> = ({ visible, product, onClose }) => {
  if (!product) return null;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <Pressable style={globalStyles.modalContainer} onPress={onClose}>
        <View style={globalStyles.modalContent}>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>

          <Text style={globalStyles.subtitle}>Loan Product Details</Text>

          <TouchableOpacity onPress={onClose} style={{alignSelf:"flex-end"}} >
           <AntDesign name="closecircleo" size={24} color="black" />
          </TouchableOpacity>

          </View>
          <Text>Product Name: {product.name}</Text>
          <Text>Maximum Amount: ${product.maximumAmount.toLocaleString()}</Text>
          <Text>Interest Rate: {product.interestRate}%</Text>


         
        </View>
      </Pressable>
    </Modal>
  );
};

export default LoanProductModal;
