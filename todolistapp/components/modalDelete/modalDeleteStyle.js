import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  topView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -25,
  },
  circleIcon: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderColor: 'white',
    borderWidth: 3,
  },
  viewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  viewContent_text: {
    fontSize: 18,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  viewButton_button: {
    paddingHorizontal: 40,
  },
  viewButton_button_text: {
    color: 'white',
  },
});
