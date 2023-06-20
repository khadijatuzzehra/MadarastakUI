import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Logo from '../../assets/svgs/Logo.svg';
import LogoCom from '../../assets/svgs/Group91.svg';
import Vector from '../../assets/svgs/Group84.svg';
import Globe from '../../assets/globe.png';
import Lock from '../../assets/Lock.png';

const Login = () => {
  const route = useRoute();
  const {language} = route.params;
  const navigation = useNavigation();

  const handleLogin = language => {
    navigation.navigate('TabStack', {language});
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Logo style={styles.overlayImage2} />
        <View style={styles.TextInput}>
          <Image source={Globe} style={styles.inputImage} />
          <TextInput
            style={styles.input}
            placeholder="Enter your E-mail"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.TextInput}>
          <Image source={Lock} style={styles.inputImage} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999999"
          />
        </View>
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => handleLogin('English')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Text style={styles.textBottom}> Please contact your school</Text>
        </View>
        <TouchableOpacity style={styles.LoginBtn2}>
          <Text style={styles.btnText2}>Login as teacher</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Vector style={styles.image} />
        <View style={styles.overlay}>
          <LogoCom style={styles.overlayImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#226CA3',
    lineHeight: 50,
    fontSize: 11,
    fontFamily: 'Montserrat-SemiBold',
  },
  textBottom: {
    color: '#4FC4D8',
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
  },

  bottom: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    marginTop: 50,
    height: 80,
    width: 190,
  },
  overlayImage2: {
    marginTop: 80,
    height: 80,
    marginBottom: '20%',
    width: 190,
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '78%',
    borderRadius: 10,
    backgroundColor: '#F1F5FF',
    paddingHorizontal: '2%',
    marginBottom: '5%',
  },
  inputImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    color: 'gray',
    width: '80%',
  },
  LoginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '78%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4FC4D8',
    paddingHorizontal: '2%',
    marginBottom: '5%',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  LoginBtn2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '78%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F1F5FF',
    paddingHorizontal: '2%',
    marginVertical: '5%',
  },
  btnText2: {
    color: '#4FC4D8',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Login;
