import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Dashboard = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.text}>Dashboard Screen</Text>
      <Button
        title="Go to Apply Form"
        onPress={() => navigation.navigate('ApplyForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
