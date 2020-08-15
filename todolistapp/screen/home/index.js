import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  Icon,
  Card,
  CardItem,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {TaskItem, BtnTask} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useStore} from 'react-redux';
import SwipeOut from 'react-native-swipeout';

import dataMock from '../../dataMock';

const date = new Date();

const listMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const HomeScreen = ({navigation}) => {
  const [dataTask, setDataTask] = useState([]);
  const [itemOpen, setItemOpen] = useState(-1);
  const [today, setToday] = useState(
    date.getDate() +
      'th ' +
      listMonth[date.getMonth() - 1] +
      ' ' +
      date.getFullYear(),
  );

  const store = useStore();
  const dispatch = useDispatch();

  const handlePressCheckBox = (id) => {
    dispatch({type: 'TOGGLE_DATA', payload: id});
  };

  store.subscribe(() => {
    setDataTask(store.getState().task.data);
  });

  useEffect(() => {
    dispatch({type: 'FETCH_DATA', payload: dataMock});
    // setDataTask(store.getState().task.data);
  }, []);

  return (
    <Container>
      <Header style={style.header}>
        <LinearGradient colors={['#19769f', '#35d8a6']} style={{flex: 1}}>
          <View style={style.headerView}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Icon style={style.textHeader} name="menu-outline" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: 'white'}}>ToDo List</Text>
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
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{today}</Text>
        </CardItem>

        <Content style={{}}>
          {dataTask.map((item, index) => (
            <SwipeOut
              onOpen={() => {
                setItemOpen(index);
              }}
              close={index !== itemOpen}
              autoClose={true}
              sensitivity={50}
              buttonWidth={67}
              backgroundColor="white"
              right={[
                {
                  backgroundColor: 'white',
                  component: <BtnTask type="delete" />,
                },
              ]}
              left={[
                {backgroundColor: 'white', component: <BtnTask type="edit" />},
              ]}>
              <TaskItem
                content={item.content}
                lever={item.lever}
                checked={item.checked}
                handlePressCheckBox={handlePressCheckBox}
                id={item.id}
              />
            </SwipeOut>
          ))}
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
