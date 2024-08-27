import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
// Store and slices
import { RootState } from '../store';
import { setLoanProducts, setActiveLoanProduct } from '../store/slices/loanProductSlice';
// UI components
import BaseLayout from '../components/BaseLayout';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import LoadingIndicator from '../components/LoadingIndicator';
import LoanProductCard from '../components/LoanProductCard';
// Styles
import globalStyles from '../styles/globalStyles';
// Types
import { LoanProduct } from '../types/Loan';
// GraphQL queries
import { GET_LOAN_PRODUCTS } from '../graphql/queries/getLoadProducts';
import Toast from 'react-native-toast-message';
import errorMessages from '../constants/errorMessages';

const Dashboard: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [activeCard, setActiveCard] = useState<LoanProduct | null>(null);
  const {loanProducts} = useSelector((state: RootState) => state.loanProducts);
  
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery<{ loanProducts: LoanProduct[] }>(GET_LOAN_PRODUCTS);

  useEffect(() => {
    if (data?.loanProducts) {
      dispatch(setLoanProducts(data.loanProducts));
    }
    if (error) {
      Toast.show({
        type: 'error',
        text1: errorMessages.genericError,
        text2: errorMessages.noLoanProducts,
      });
    }
  }, [data, error, dispatch]);

  const handleSetActiveCard = (item: LoanProduct) => {
    setActiveCard(item);
    dispatch(setActiveLoanProduct(item));
  };

  const handleApplyPress = () => {
    if (!activeCard) {
      Toast.show({
        type: 'error',
        text1:  errorMessages.genericError,
        text2: errorMessages.noLoanProductSelected,
      });
      return;
    }
    navigation.navigate('ApplyForm');
  };

  const renderItem = useCallback(({ item }: { item: LoanProduct }) => (
    <LoanProductCard
      product={item}
      isActive={item.id === activeCard?.id}
      onPress={() => handleSetActiveCard(item)}
    />
  ), [activeCard]);

  const renderContent = () => {
    if (loading) {
      return <LoadingIndicator size="large" />;
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
          onPress={handleApplyPress} 
          text="APPLY FOR A LOAN" 
        />
      </View>
    </BaseLayout>
  );
};

export default Dashboard;
