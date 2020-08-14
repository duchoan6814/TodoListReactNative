import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Content, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderDrawer = (props) => {
  const {screenIndex, handleChangeScreen, navigation} = props;
  const [listNavigation] = useState([
    {
      icon: 'home',
      text: 'Home',
    },
    {
      icon: 'checkbox-outline',
      text: 'Done',
    },
    {
      icon: 'person-outline',
      text: 'Profile',
    },
    {
      icon: 'information-circle-outline',
      text: 'Imformation',
    },
  ]);

  const handleChangeScreenInside = (index) => {
    handleChangeScreen(index);
    navigation.closeDrawer();
  };

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
          {listNavigation.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                handleChangeScreenInside(index);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 50,
                  paddingHorizontal: 10,
                  backgroundColor: screenIndex === index ? '#5fe5bc' : 'white',
                }}>
                <Icon
                  name={item.icon}
                  style={{
                    marginRight: 10,
                    color: screenIndex === index ? 'white' : 'black',
                  }}
                />
                <Text
                  style={{
                    fontSize: 17,
                    color: screenIndex === index ? 'white' : 'black',
                  }}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
