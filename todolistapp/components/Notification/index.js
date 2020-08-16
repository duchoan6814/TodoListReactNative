import React from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Icon, Button} from 'native-base';

const Notification = (props) => {
  const {isVisible, setVisible, content, type, icon} = props;

  const renderColorButton = (type) => {
    if (type === 'success') return 'green';
    if (type === 'error') return 'red';
    return 'orange';
  };

  return (
    <Modal
      avoidKeyboard={true}
      isVisible={isVisible}
      onBackdropPress={() => {
        setVisible(false);
      }}
      onBackButtonPress={() => {
        setVisible(false);
      }}>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            name="checkmark-circle"
            style={{fontSize: 50, color: renderColorButton(type)}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 18}}>{content}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Button
            rounded
            onPress={() => {
              setVisible(false);
            }}
            block
            style={{
              paddingHorizontal: 60,
              backgroundColor: renderColorButton(type),
            }}>
            <Text>OK</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default Notification;
