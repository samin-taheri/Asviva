import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import ListItem from "./ListItem";

interface MyModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isVisible, onClose }) => {
    const toggleModal = () => {
        onClose();
      };
  return (
    <Modal isVisible={isVisible} style={{ justifyContent: "flex-end", margin: 0 }} onBackdropPress={toggleModal}>
      <View style={{ backgroundColor: "white", padding: 16 }}>
      <View style={styles.modalContent}>
          <Feather
            name="x"
            size={24}
            color="black"
            style={styles.closeIcon}
            onPress={onClose}
          />
          <Text style={styles.title}>Modal Content</Text>
          <View style={styles.container2}>
          <ListItem iconName="file-text" style={{ fontSize: 16, paddingRight: '28%', textAlign: 'left'}} itemText="Questionnaire evaluation" />
          <ListItem iconName="battery-charging" style={{ fontSize: 16, paddingRight: '36%', textAlign: 'left'}} itemText="Physical fitness test" />
          <ListItem iconName="edit" style={{ fontSize: 16, paddingRight: '38%', textAlign: 'left'}} itemText="Manual fine-tuning" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: "white",
        padding: 16,
        width: "100%",
        height: "30%",
        borderRadius: 10,
        alignItems: "center", 
      },
      container2:{
        paddingTop: 20,
        width: '100%'
      },
      closeIcon: {
        position: "absolute",
        top: 10,
        right: 15,
      },
      title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15
      }
    });

export default MyModal;
