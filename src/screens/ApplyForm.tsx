import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, Keyboard, StatusBar } from 'react-native';

// UI components
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

// Styles
import globalStyles from '../styles/globalStyles';

const ApplyForm = ({ navigation }: { navigation: any }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSubmit = () => {
    // Add form submission logic here
    console.log({ fullname, email, amount, purpose });
    navigation.navigate('Dashboard');
  };

  return (
    <BaseLayout>
      <KeyboardAvoidingView
        style={{ paddingTop: isKeyboardVisible ? StatusBar.currentHeight : 0 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        
        {!isKeyboardVisible && <Header title="Apply for a loan" />}
          <View style={globalStyles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%"}} >
          
            <CustomInput
              label="Full Name"
              placeholder="Full Name"
              value={fullname}
              onChangeText={setFullname}
            />
            <CustomInput
              label="Email"
              placeholder="yourname@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <CustomInput
              label="Loan Amount"
              placeholder="UGX"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <CustomInput
              label="Loan Purpose"
              placeholder="Loan Purpose"
              value={purpose}
              onChangeText={setPurpose}
            />

        </ScrollView>
          </View>
          <View style={globalStyles.footerContainer}>
            <CustomButton onPress={handleSubmit} text="SUBMIT" />
          </View>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};

export default ApplyForm;
