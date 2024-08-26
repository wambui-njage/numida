import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import globalStyles from '../styles/globalStyles';

interface NetworkContextValue {
  isConnected: boolean;
  retryConnection: () => void;
}

const NetworkContext = createContext<NetworkContextValue | undefined>(undefined);

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const previousIsConnected = useRef<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const wasConnected = previousIsConnected.current;
      const nowConnected = state.isConnected ?? false;

      setIsConnected(nowConnected);
      setIsModalVisible(!nowConnected);

      if (!wasConnected && nowConnected) {
        Toast.show({
          type: 'success',
          text1: 'You are back online 👍🏾!',
        });
      }

      previousIsConnected.current = nowConnected;
    });

    return () => unsubscribe();
  }, []);

  const retryConnection = () => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected ?? false);
      setIsModalVisible(!(state.isConnected ?? true));
    });
  };

  return (
    <NetworkContext.Provider value={{ isConnected, retryConnection }}>
      {children}
      <Modal transparent={true} visible={isModalVisible} animationType="slide">
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalContent}>
            <Text style={globalStyles.modalText}>You have no internet connection</Text>
            <MaterialIcons style={globalStyles.modalImage} name="wifi-off" size={100} color="black" />
            <TouchableOpacity style={globalStyles.retryButton} onPress={retryConnection}>
              <Text style={globalStyles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NetworkContext.Provider>
  );
};

