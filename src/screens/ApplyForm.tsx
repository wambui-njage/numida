import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, Keyboard, StatusBar } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

// UI components
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import Header from '../components/Header';
import LoadingIndicator from '../components/LoadingIndicator';

// Styles
import globalStyles from '../styles/globalStyles';

// Custom hooks
import useApplyLoan from '../hooks/useApplyLoan';
import { RootState } from '../store';
import { createValidationSchema } from '../utils/validationSchema';
import { clearForm } from '../store/slices/formSlice';

const ApplyForm: React.FC<{ navigation: any }> = ({ navigation }) =>{
  const dispatch = useDispatch();
  const { applyLoan, loading } = useApplyLoan();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const formState = useSelector((state: any) => state.form);
  const { activeLoanProduct } = useSelector((state: RootState) => state.loanProducts);

  const validationSchema = createValidationSchema(activeLoanProduct?.maximumAmount ?? Infinity);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  //array dependancies to allow a render updated data - bugfix
  useEffect(() => {

    if (formState.submissionSuccess && formState.formData.loan_amount) {
      Toast.show({
        type: 'success',
        text1: 'Loan application submitted successfully!',
      });
      dispatch(clearForm());
      navigation.navigate('Dashboard');
    }
  }, [formState.submissionSuccess,formState.formData.loan_amount]);

  const handleSubmit =  async (values: any, { resetForm }: FormikHelpers<any>) => {
      Keyboard.dismiss();

      try {
        await applyLoan({
          full_name: values.fullname,
          email: values.email,
          loan_amount: values.amount,
          loan_purpose: values.purpose,
        });

        resetForm();
      } catch (err) {
        //Sentry would be added here for debuging
        Toast.show({
          type: 'error',
          text1: 'An error occurred. Please try again.',
        });
      }
    }
  

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
              <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
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
                  placeholder="USD"
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
              {loading ? (
                <LoadingIndicator size="large" />
              ) : (
                <CustomButton onPress={handleSubmit} text="SUBMIT" />
              )}
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </BaseLayout>
  );
};

export default ApplyForm;
