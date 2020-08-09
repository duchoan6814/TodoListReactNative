import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Form, Item, Input} from 'native-base';
import Modal from 'react-native-modal';

const AddButtonModal = (props) => {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <Button
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#5fe5bc',
          marginTop: -25,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
          // opacity: 0,
        }}
        onPress={() => {
          setModal(true);
        }}>
        <Icon name="add-outline" style={{color: 'white', fontSize: 40}} />
      </Button>
      <Modal
        avoidKeyboard={true}
        isVisible={isModal}
        onBackdropPress={() => {
          setModal(false);
        }}
        onBackButtonPress={() => {
          setModal(false);
        }}>
        <View
          style={{
            flex: 1 / 2,
            backgroundColor: 'white',
            borderRadius: 10,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: -7,
            }}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: '#5fe5bc',
                marginTop: -25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 35,
                borderColor: 'white',
                borderWidth: 3,

                // opacity: 0,
              }}>
              <Icon name="flag" style={{color: 'white', fontSize: 40}} />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Form>
              <Item rounded style={{paddingHorizontal: 10}}>
                <Input placeholder="Input your task..." />
              </Item>
            </Form>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // marginLeft: -15,
                marginTop: 20,
              }}>
              {/* <CheckBox
                label="RadioButton"
                size={30}
                checked={this.state.isRadioSelected}
                onPress={this.handleSelectedRadionButton}
                uncheckedIconName="radio-button-unchecked"
                checkedIconName="radio-button-checked"
              /> */}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddButtonModal;
