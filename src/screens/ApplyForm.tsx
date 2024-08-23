import React from 'react';
import { Text } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton'; // Optional: Use reusable button

const ApplyForm = ({ navigation }: { navigation: any }) => {
  return (
    <BaseLayout>
      
      <CustomButton
        text="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </BaseLayout>
  );
};

export default ApplyForm;
