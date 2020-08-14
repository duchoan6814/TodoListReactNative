import React from 'react';
import {CardItem, Item} from 'native-base';
import {Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';

const TaskItem = (props) => {
  const {content, lever, checked} = props;

  const renderColorCheckBox = (lever) => {
    if (lever === 1) return '#5fe5bc';
    if (lever === 2) return '#ffb367';
    return '#95389e';
  };
  return (
    <CardItem
      style={{
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        marginTop: 10,
        height: 70,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        flexDirection: 'row',
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        borderRadius: 5,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1 / 25,
              backgroundColor: renderColorCheckBox(lever),
            }}></View>
          <View
            style={{
              flex: 24 / 25,
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20}}>{content}</Text>
            <CheckBox
              style={{marginLeft: 0, marginRight: 20}}
              isChecked={checked}
              checkBoxColor={renderColorCheckBox(lever)}
            />
          </View>
        </View>
      </View>
    </CardItem>
  );
};

export default TaskItem;
