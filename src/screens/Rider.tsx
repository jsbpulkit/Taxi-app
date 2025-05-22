import React, { useState } from 'react';
import { View, Button } from 'react-native';
import DialogBox from '../components/DialogBox';

const Rider = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Dialog" onPress={() => setDialogVisible(true)} />
      <DialogBox
        visible={isDialogVisible}
        onClose={() => setDialogVisible(false)}
        title="Success"
        message="Your action was completed."
      />
    </View>
  );
};

export default Rider;
