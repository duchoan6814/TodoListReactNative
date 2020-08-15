import React from 'react';
import {View} from 'react-native';
import {Icon, Button} from 'native-base';
const BtnTask = (props) => {
  const {type} = props;
  const renderIcon = (type) => {
    return type === 'edit' ? 'create-outline' : 'trash-outline';
  };

  const renderButton = (type) =>
    type === 'edit' ? (
      <Button rounded warning>
        <Icon name="create-outline" />
      </Button>
    ) : (
      <Button rounded danger>
        <Icon name="trash-outline" />
      </Button>
    );

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginLeft: type === 'edit' ? 10 : 0,
        marginRight: type === 'edit' ? 0 : 10,
      }}>
      {renderButton(type)}
    </View>
  );
};

export default BtnTask;
