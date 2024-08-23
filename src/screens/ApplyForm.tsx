import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const ApplyForm = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.text}>Apply Form Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
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

export default ApplyForm;
