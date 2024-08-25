import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import BaseLayout from '../components/BaseLayout';
import { RootState } from '../store';
import { setLoanProducts } from '../store/slices/loanProductSlice';
import globalStyles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';
import LoanProductCard from '../components/LoanProductCard';
import { LoanProduct } from '../types/LoanProduct';
import Header from '../components/Header';

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

const Dashboard: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const loanProducts = useSelector((state: RootState) => state.loanProducts.loanProducts);

  const { loading, error, data } = useQuery<{ loanProducts: LoanProduct[] }>(GET_LOAN_PRODUCTS);

  useEffect(() => {
    if (data?.loanProducts) {
      dispatch(setLoanProducts(data.loanProducts));

      if (data.loanProducts.length > 0) {
        setActiveCardId(data.loanProducts[0].id);
      }
    }
  }, [data, dispatch]);

  const handleSetActiveCardId = (id: number) => {
    setActiveCardId(id);
  };

  const renderItem = useCallback(({ item }: { item: LoanProduct }) => (
    <LoanProductCard
      product={item}
      isActive={item.id === activeCardId}
      onPress={() => handleSetActiveCardId(item.id)}
    />
  ), [activeCardId]);

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={colors.accentGreen} />;
    }

    if (error) {
      return <Text style={globalStyles.errorText}>Error: {error.message}</Text>;
    }

    if (loanProducts.length === 0) {
      return <Text style={globalStyles.errorText}>No loan products available</Text>;
    }

    return (
      <FlatList
        data={loanProducts}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <BaseLayout>
      <Header title='Loan Application Dashboard'/>
      <View style={globalStyles.contentContainer}>
        {renderContent()}
      </View>
      <View style={globalStyles.footerContainer}>
        <CustomButton 
          onPress={() => navigation.navigate('ApplyForm')} 
          text="APPLY FOR A LOAN" 
        />
      </View>
    </BaseLayout>
  );
};

export default Dashboard;
