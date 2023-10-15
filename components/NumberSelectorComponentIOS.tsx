import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Modal from 'react-native-modal';
import { NumberSelectorModalProps } from '../types/data';
import { SafeAreaView } from 'react-native-safe-area-context';

const NumberSelectorModal: React.FC<NumberSelectorModalProps> = ({
  isVisible,
  onToggle,
  onSelectNumber,
}) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberChange = (value: number | null) => {
    setSelectedNumber(value);
  };

  const numberItems = Array.from({ length: 10 }, (_, index) => ({
    label: String(index + 1),
    value: index + 1,
  }));

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onToggle}
      backdropOpacity={0.5}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Select a Number:</Text>
        
        <Button title="Select" onPress={() => onSelectNumber(selectedNumber)} />
        <Button title="Cancel" onPress={onToggle} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25
  },
  selectedNumber: {
    fontSize: 16,
    marginTop: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 12,
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 12,
    color: 'black',
    paddingRight: 30,
  },
});

export default NumberSelectorModal;
