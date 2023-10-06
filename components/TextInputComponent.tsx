import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Modal from 'react-native-modal';

interface TextInputComponentProps {
  isVisible: boolean;
  onToggle: () => void;
  onSelectNickname: (selectedNickname: string) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  isVisible,
  onToggle,
  onSelectNickname,
}) => {
    const [inputText, setInputText] = useState<string>('');
    const [selectedNickname, setsSlectedNickname] = useState<string>('');

  const handleTextInputChange = (text: string) => {
    setInputText(text);
    setsSlectedNickname(selectedNickname);
  };

  const handleConfirm = () => {
    onSelectNickname(inputText);
    setInputText('');
    onToggle();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onToggle}
      backdropOpacity={0.5}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Enter Nickname</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleTextInputChange}
          value={inputText}
          placeholder="Select Nickname"
        />
        <Button title="Select" onPress={() => onSelectNickname(inputText)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 12
  },
});

export default TextInputComponent;
