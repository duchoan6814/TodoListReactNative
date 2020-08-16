import React, {useEffect} from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Icon, Button} from 'native-base';
import {useDispatch} from 'react-redux';

import style from './modalDeleteStyle';

const ModalDelete = (props) => {
  const {isModal, setModal, id, setVisibleNotificationDelete} = props;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({type: 'DELETE_DATA', payload: id});
    setModal(false);
    setVisibleNotificationDelete(true);
  };

  return (
    <Modal
      avoidKeyboard={true}
      isVisible={isModal}
      onBackdropPress={() => {
        setModal(false);
      }}
      onBackButtonPress={() => {
        setModal(false);
      }}>
      <View style={style.container}>
        <View style={style.topView}>
          <View style={style.circleIcon}>
            <Icon name="trash" style={{color: 'white', fontSize: 40}} />
          </View>
        </View>
        <View style={style.viewContent}>
          <Text style={style.viewContent_text}>
            Bạn có chắc muốn xóa công việc này?
          </Text>
        </View>
        <View style={style.viewButton}>
          <Button
            onPress={() => setModal(false)}
            style={style.viewButton_button}
            light
            rounded>
            <Text>Cancel</Text>
          </Button>
          <Button
            onPress={() => handleDelete(id)}
            style={style.viewButton_button}
            danger
            rounded>
            <Text style={style.viewButton_button_text}>Delete</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
