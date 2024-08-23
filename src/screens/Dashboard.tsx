import React from 'react';
import { Text, Button } from 'react-native';
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton'; // Optional: Use reusable button

const Dashboard = ({ navigation }: { navigation: any }) => {
  return (
    <BaseLayout>
     
      <CustomButton
        text="Go to Apply Form"
        onPress={() => navigation.navigate('ApplyForm')}
      />
    </BaseLayout>
  );
};

export default Dashboard;
