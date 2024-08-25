import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, Keyboard, StatusBar } from 'react-native';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// UI components
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';

// Styles
import globalStyles from '../styles/globalStyles';

const ApplyForm = ({ navigation }: { navigation: any }) => {
  
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'Full name must include at least two names')
      .required('Full name is required'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    amount: Yup.number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .moreThan(1000, 'Loan amount must be greater than 1000'),
    
    purpose: Yup.string()
      .min(5, 'Loan purpose must be more than 4 characters')
      .required('Loan purpose is required'),
  });

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
    console.log("submit");
    //navigation.navigate('Dashboard');
  };

  return (
    <BaseLayout>
      <Formik
          initialValues={{ fullname: '', email: '', amount: '', purpose: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <KeyboardAvoidingView
            style={{ paddingTop: isKeyboardVisible ? StatusBar.currentHeight : 0 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            
            {!isKeyboardVisible && <Header title="Apply for a loan" />}
            <View style={globalStyles.contentContainer}>
              <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%"}} >
                
                <CustomInput
                    label="Full Name"
                    value={values.fullname}
                    placeholder="Full Name"
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    error={touched.fullname ? errors.fullname : undefined}
                  />
                  
                  <CustomInput
                    label="Email"
                    placeholder="yourname@example.com"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    error={touched.email ? errors.email : undefined}
                  />
                  
                  <CustomInput
                    label="Loan Amount"
                    placeholder="UGX"
                    onChangeText={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    value={values.amount}
                    keyboardType="numeric"
                    error={touched.amount ? errors.amount : undefined}
                  />
                  
                  <CustomInput
                    label="Loan Purpose"
                    placeholder="Loan Purpose"
                    onChangeText={handleChange('purpose')}
                    onBlur={handleBlur('purpose')}
                    value={values.purpose}
                    error={touched.purpose ? errors.purpose : undefined}
                  />

              </ScrollView>
            </View>
            <View style={globalStyles.footerContainer}>
              <CustomButton onPress={handleSubmit} text="SUBMIT" />
            </View>
          </KeyboardAvoidingView>
          )}
      </Formik>
    </BaseLayout>
  );
};

export default ApplyForm;
