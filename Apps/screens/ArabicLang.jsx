import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Vector2 from '../../assets/Group91.png';
import English from '../../assets/English.png';
import Arabic from '../../assets/Arabic.png';
import Logo from '../../assets/svgs/Group91.svg';
import Font from '../../assets/svgs/G1.svg';
import Vector from '../../assets/svgs/Group84.svg';

const ArabicLang = () => {
  const navigation = useNavigation();

  const handleLanguageSelection = language => {
    navigation.navigate('ArabicLogin', {language});
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Font style={styles.overlayImage2} />
        <Text style={styles.text}>اختر اللغة المفضلة </Text>
        <Text style={styles.textBottom}>الرجاء اختيار اللغة</Text>
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleLanguageSelection('English')}>
            <View style={styles.btnContent}>
              <Image source={English} style={styles.icon} />
              <Text style={styles.textButton2}>English</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleLanguageSelection('Arabic')}>
            <View style={styles.btnContent}>
              <Image source={Arabic} style={styles.icon} />
              <Text style={styles.textButton}>عربي</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Vector style={styles.image} />
        <View style={styles.overlay}>
          <Logo style={styles.overlayImage} />
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
    marginHorizontal: 60,
    marginTop: 300,
  },
  text: {
    color: '#226CA3',
    lineHeight: 50,
    fontSize: 18,
    fontFamily: 'Questv1 Regular',
  },
  textBottom: {
    color: '#333333',
    fontFamily: 'Questv1 Regular',
    fontSize: 13,
    fontWeight: '400',
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    marginLeft: 4,
    fontStyle: 'normal',
  },
  textButton2: {
    color: '#226CA3',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontStyle: 'normal',
  },
  options: {
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  btn: {
    backgroundColor: '#F1F5FF',
    marginTop: 20,
    width: 140,
    marginRight: 10,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
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
  overlayImage2: {
    marginTop: 50,
    height: 80,
    width: 190,
    marginLeft: 270,
  },
  overlayImage: {
    marginTop: 50,
    height: 80,
    width: 190,
  },
});

export default ArabicLang;
