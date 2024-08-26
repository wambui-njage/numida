import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '../styles/colors';
import Toast from 'react-native-toast-message';

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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>No Internet Connection</Text>
            <MaterialIcons style={styles.image} name="wifi-off" size={100} color="black" />
            <TouchableOpacity style={styles.retryButton} onPress={retryConnection}>
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NetworkContext.Provider>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    fontWeight:"bold",
    marginBottom: 20,
  },
  image: {
    
    marginBottom: 20,
  },
  retryButton: {
    padding: 10,
    backgroundColor: colors.primary,
    width:"100%",
    borderRadius: 15,
    
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center"
  },
});
