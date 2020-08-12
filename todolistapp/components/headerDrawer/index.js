import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Content, Icon} from 'native-base';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const HeaderDrawer = (props) => {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 30,
          borderBottomWidth: 0.5,
          borderBottomColor: 'grey',
        }}>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            marginRight: 10,
          }}
          source={require('../../image/avata.jpg')}
        />
        <View
          style={{
            flexDirection: 'column',
            flexWrap: 'wrap',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Text
              numberOfLines={2}
              style={{fontWeight: 'bold', fontSize: 20, flexShrink: 1}}>
              Trương Đức Hoàn
            </Text>
          </View>
          <Text>150</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
          flex: 1,
        }}>
        <View style={{paddingVertical: 10}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                paddingHorizontal: 10,
              }}>
              <Icon name="home" style={{marginRight: 10}} />
              <Text style={{fontSize: 17}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                paddingHorizontal: 10,
              }}>
              <Icon name="checkbox-outline" style={{marginRight: 10}} />
              <Text style={{fontSize: 17}}>Done</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                paddingHorizontal: 10,
              }}>
              <Icon name="person-outline" style={{marginRight: 10}} />
              <Text style={{fontSize: 17}}>Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
                paddingHorizontal: 10,
              }}>
              <Icon
                name="information-circle-outline"
                style={{marginRight: 10}}
              />
              <Text style={{fontSize: 17}}>imformation</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              alignItems: 'center',
              paddingVertical: 10,
              borderTopWidth: 0.5,
              borderTopColor: 'grey',
              width: '100%',
            }}>
            <Icon name="exit-outline" style={{marginRight: 10}} />
            <Text style={{fontSize: 17}}>Exit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HeaderDrawer;
