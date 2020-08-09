import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Header,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';

const LoginComp = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {changeWhenLoginTrue} = props;

  const handleLogin = (userName, password) => {
    if (userName.trim().toLowerCase() !== 'duchoan6814') {
      Alert.alert(
        `Tên tài khoản không tồn tại!`,
        `Vui lòng nhập dúng tên tài khoản!`,
      );
      return;
    }
    if (password !== 'sapassword') {
      Alert.alert(`Mật khẩu không chính xác!`, `Vui lòng nhập lại mật khẩu!`);
      return;
    }
    changeWhenLoginTrue();
    return true;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={General.container}>
        <Image
          style={General.logo}
          source={require('../../image/logo.jpg')}></Image>
        <Form style={General.formLogin}>
          <Item style={General.input}>
            <Input
              onChangeText={(text) => {
                setUserName(text);
              }}
              placeholder="User name"
            />
          </Item>
          <Item style={General.input}>
            <Input
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
              placeholder="Password"
            />
          </Item>
        </Form>
        <View style={{marginTop: 20}}>
          <Button
            onPress={() => {
              handleLogin(userName, password);
            }}
            style={General.buttonLogin}
            rounded
            info>
            <Text>Login</Text>
          </Button>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

const General = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: (300 / 1641) * 857,
  },
  formLogin: {
    width: '100%',
    marginTop: 30,
  },
  buttonLogin: {
    paddingHorizontal: 50,
  },
  input: {
    width: '90%',
  },
});

export default LoginComp;
