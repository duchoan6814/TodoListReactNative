import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Icon, Form, Item, Input} from 'native-base';
import Modal from 'react-native-modal';
import uuid from 'react-native-uuid';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const AddButtonModal = (props) => {
  const [isModal, setModal] = useState(false);
  const [selectRadio, setSelectRadio] = useState(0);
  const [dataInput, setDataInput] = useState('');
  const [dataRadio, setDataRadio] = useState([
    {label: 'Lever 1', value: 0},
    {label: 'Lever 2', value: 1},
    {label: 'Lever 3', value: 2},
  ]);
  const [listColor, setListColor] = useState(['#5fe5bc', '#ffb367', '#95389e']);

  const handleChangeSelect = (i) => setSelectRadio(i);
  const dispatch = useDispatch();

  const handleWhenSubmit = () => {
    const data = {
      id: uuid.v4(),
      content: dataInput,
      lever: dataRadio[selectRadio].value + 1,
      checked: false,
    };
    dispatch({
      type: 'ADD_DATA',
      payload: data,
    });
    setModal(false);
  };

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
        }}
        onPress={() => {
          setModal(true);
        }}>
        <Icon name="add-outline" style={{color: 'white', fontSize: 40}} />
      </Button>
      <Modal
        avoidKeyboard={true}
        isVisible={isModal}
        // onBackdropPress={() => {
        //   setModal(false);
        // }}
        onBackButtonPress={() => {
          setModal(false);
        }}>
        <View
          style={{
            paddingBottom: 30,
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
              }}>
              <Icon name="flag" style={{color: 'white', fontSize: 40}} />
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Form>
              <Item rounded style={{paddingHorizontal: 10}}>
                <Input
                  placeholder="Input your task..."
                  onChangeText={(text) => setDataInput(text)}
                />
              </Item>
            </Form>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                // marginLeft: -15,
                marginTop: 20,
                alignItems: 'center',
                marginLeft: -15,
              }}>
              <RadioForm formHorizontal={true} animation={true}>
                {dataRadio.map((obj, i) => (
                  <RadioButton labelHorizontal={false} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={selectRadio === i}
                      onPress={handleChangeSelect}
                      borderWidth={1}
                      buttonInnerColor={listColor[i]}
                      buttonOuterColor={listColor[i]}
                      buttonSize={30}
                      buttonOuterSize={40}
                      buttonStyle={{}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={() => handleChangeSelect(i)}
                      labelStyle={{
                        fontSize: 17,
                        color: listColor[i],
                        marginLeft: -10,
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 40,
              }}>
              <Button
                onPress={() => {
                  setModal(false);
                }}
                rounded
                block
                iconLeft
                danger>
                <Icon name="home" />
              </Button>
              <Button
                rounded
                iconLeft
                block
                onPress={() => {
                  handleWhenSubmit();
                }}
                style={{
                  backgroundColor: '#5fe5bc',
                  width: 200,
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                }}>
                <Icon
                  style={{fontSize: 30, marginLeft: -30}}
                  name="checkmark-outline"
                />
                <Text style={{fontSize: 17, color: 'white'}}>Add</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddButtonModal;
