import React from 'react';
import {View} from 'native-base';
import {Button, Icon} from 'native-base';

const AddButtonModal = (props) => {
  return (
    <>
      <Button
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#5fe5bc',
          marginTop: -35,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,
        }}>
        <Icon name="add-outline" style={{color: 'white', fontSize: 40}} />
      </Button>
    </>
  );
};

export default AddButtonModal;
