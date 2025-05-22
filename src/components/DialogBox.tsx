import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

interface DialogBoxProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const { width } = Dimensions.get('window');

const DialogBox: React.FC<DialogBoxProps> = ({
  visible,
  onClose,
  title = 'Notice',
  message = 'This is a dialog box.'
}) => {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose} animationIn="zoomIn" animationOut="zoomOut">
      <View style={styles.container}>
        <Text style={styles.title}>Your Ride Has Been Assigned</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DialogBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 28,
    borderRadius: 20,
    width: width * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
