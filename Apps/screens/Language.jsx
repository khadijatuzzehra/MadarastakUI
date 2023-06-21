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

//Import Images and svgs from folder
import Vector2 from '../../assets/Group91.png';
import English from '../../assets/English.png';
import Arabic from '../../assets/Arabic.png';
import Logo from '../../assets/svgs/Group91.svg';
import Font from '../../assets/svgs/G1.svg';
import Vector from '../../assets/svgs/Group84.svg';

import dim from '../../utils/dim';

const Language = () => {
  const navigation = useNavigation();

  const handleLanguageSelection = language => {
    //Languages selection used for further navigation
    if (language === 'English') {
      navigation.navigate('Login', {language});
    } else {
      navigation.navigate('ArabicLogin', {language});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Font style={styles.overlayImage} />
        <Text style={styles.text}>Choose your preferred language</Text>
        <Text style={styles.textBottom}>Please select your language</Text>
        <View style={styles.options}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleLanguageSelection('English')}>
            <View style={styles.btnContent}>
              <Image source={English} style={styles.icon} />
              <Text style={styles.textButton}>English</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleLanguageSelection('Arabic')}>
            <View style={styles.btnContent}>
              <Image source={Arabic} style={styles.icon} />
              <Text style={styles.textButton}>Arabic</Text>
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

//Stylesheet for styling purposes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 1,
    marginHorizontal: (60 / dim.w) * dim.Width,
    marginTop: (250 / dim.w) * dim.Width,
  },
  text: {
    color: '#226CA3',
    lineHeight: 30,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  textBottom: {
    color: '#333333',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontWeight: '400',
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontStyle: 'normal',
  },
  options: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#F1F5FF',
    borderRadius: 15,
    marginTop: (15 / dim.h) * dim.Height,
    width: (130 / dim.w) * dim.Width,
    height: (48 / dim.h) * dim.Height,
    marginRight: (15 / dim.h) * dim.Height,
    justifyContent: 'center',
    paddingHorizontal: (10 / dim.w) * dim.Width,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: (15 / dim.h) * dim.Height,
    width: (15 / dim.h) * dim.Height,
    marginRight: (8 / dim.h) * dim.Height,
    borderRadius: 5,
  },
  bottom: {
    width: dim.Width,
    alignItems: 'center',
  },
  image: {
    height: (100 / dim.h) * dim.Height,
    width: dim.Width,
  },
  overlay: {
    position: 'absolute',
    marginTop: (60 / dim.h) * dim.Height,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayImage: {
    marginTop: (25 / dim.h) * dim.Height,
    height: (80 / dim.h) * dim.Height,
    width: (80 / dim.h) * dim.Height,
  },
});

export default Language;
