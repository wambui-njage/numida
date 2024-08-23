import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import BaseLayout from '../components/BaseLayout';
import { RootState } from '../store';
import { setLoanProducts } from '../store/slices/loanProductSlice';
import globalStyles from '../styles/globalStyles';

// GraphQL query
const GET_LOAN_PRODUCTS = gql`
  query GetLoanProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_LOAN_PRODUCTS);
  const loanProducts = useSelector((state: RootState) => state.loanProducts.loanProducts);

  useEffect(() => {
    if (data?.loanProducts) {
      dispatch(setLoanProducts(data.loanProducts));
    }
  }, [data, dispatch]);

  const renderLoanProducts = () => {
    if (Array.isArray(loanProducts) && loanProducts.length > 0) {
      return loanProducts.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Text>Interest Rate: {product.interestRate}%</Text>
          <Text>Maximum Amount: ${product.maximumAmount}</Text>
        </View>
      ));
    }
    return <Text>No loan products available</Text>;
  };

  return (
    <BaseLayout>
      <Text style={globalStyles.header}>Loan Products</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <View>{renderLoanProducts()}</View>
      )}
    </BaseLayout>
  );
};

export default Dashboard;
