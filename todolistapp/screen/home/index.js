import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Content,
  Text,
  Icon,
  Right,
  Input,
  Form,
  Item,
  Card,
  CardItem,
  CheckBox,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {TaskItem} from '../../components';

const HomeScreen = (props) => {
  return (
    <Container>
      <Header style={style.header}>
        <LinearGradient colors={['#19769f', '#35d8a6']} style={{flex: 1}}>
          <View style={style.headerView}>
            <Icon style={style.textHeader} name="menu-outline" />
            <Text style={{fontSize: 20, color: 'white'}}>Task</Text>
            <Icon
              name="ellipsis-vertical-outline"
              style={{fontSize: 30, color: 'white'}}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              width: '100%',
            }}>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 130 / 2,
                borderWidth: 2,
                borderColor: 'white',
              }}
              source={require('../../image/avata.jpg')}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: 10,
                flexWrap: 'wrap',
                flex: 1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    flexShrink: 1,
                  }}
                  numberOfLines={3}>
                  Trương Đức Hoàn
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'orange', fontSize: 17}}>150</Text>
                <Icon
                  name="flame-outline"
                  style={{color: 'orange', marginLeft: 5}}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </Header>

      <Card
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: -80,
          flex: 1,
          marginBottom: 20,
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <CardItem
          Header
          style={{
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#5fe5bc',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>4th March 2020</Text>
        </CardItem>

        <Content style={{}}>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Content>
      </Card>
    </Container>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  header: {paddingLeft: 0, paddingRight: 0, height: 300},
  headerView: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHeader: {fontSize: 40, color: 'white'},
});
