import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Searchbar, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/svgs/user.png';
import Vector from '../../assets/svgs/Group 161.svg';
import Verified from '../../assets/svgs/verified.png';
import dim from '../../utils/dim';

function ArabicProfileScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const handleLogin = language => {};

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.overlay}>
          <Image source={Logo} style={styles.profilePicture} />
        </View>
        <View style={styles.overlay2}>
          <Text style={styles.text}>Ammar Munir</Text>
          <Text style={styles.textBottom}>Marion Grammar School</Text>
        </View>
        <View style={styles.verifiedView}>
          <Image source={Verified} style={styles.verified} />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.textAlignment}>بيانات المستخدم:</Text>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>اسم الاب</Text>
          <Text style={styles.textAlignment3}>نعيم حارس</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>جنس</Text>
          <Text style={styles.textAlignment3}>مذکر</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>تاريخ الميلاد</Text>
          <Text style={styles.textAlignment3}>06 / كانون الثاني / 1996</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>موضوع</Text>
          <Text style={styles.textAlignment3}>لوريم إيبسوم</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>لغة</Text>
          <Text style={styles.textAlignment3}>إنجليزي</Text>
        </View>

        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => handleLogin('')}>
          <Text style={styles.btnText}>تسجيل خروج</Text>
        </TouchableOpacity>
        <View style={styles.rowAlignment}>
          <Text onPress={() => handleLogin(' ')} style={styles.textAlignment1}>
            Privacy Policy
          </Text>
          <Text onPress={() => handleLogin(' ')} style={styles.textAlignment1}>
            Terms of Use
          </Text>
        </View>
        <Text style={styles.textBottom}>
          &copy; Hysetech Private Limited {'\n'}App Version 1.0.0
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5FF',
  },
  profileContainer: {
    position: 'relative',
    backgroundColor: '#F1F5FF',
    height: (220 / dim.w) * dim.Width,
    width: dim.Width,
  },
  profilePicture: {
    height: (100 / dim.w) * dim.Width,
    width: (100 / dim.w) * dim.Width,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },
  verified: {
    position: 'absolute',
    marginLeft: (1 / dim.w) * dim.Width,
    marginTop: (2 / dim.w) * dim.Width,
    height: (20 / dim.w) * dim.Width,
    width: (20 / dim.w) * dim.Width,
  },
  verifiedView: {
    position: 'absolute',
    height: (20 / dim.w) * dim.Width,
    width: (20 / dim.w) * dim.Width,
    marginLeft: (260 / dim.w) * dim.Width,
    marginTop: (150 / dim.w) * dim.Width,
  },
  text: {
    color: '#4FC4D8',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  textBottom: {
    color: '#444444',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    textAlign: 'center',
  },
  LoginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: dim.Width - 60,
    height: (50 / dim.w) * dim.Width,
    borderRadius: 10,
    backgroundColor: '#4FC4D8',
    marginHorizontal: (30 / dim.w) * dim.Width,
    marginVertical: (20 / dim.w) * dim.Width,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Questv1 Regular',
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    fontStyle: 'normal',
  },
  rowAlignment: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    top: (50 / dim.w) * dim.Width,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay2: {
    top: (50 / dim.w) * dim.Width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textAlignment: {
    marginTop: (20 / dim.w) * dim.Width,
    marginHorizontal: (30 / dim.w) * dim.Width,
    marginVertical: (20 / dim.w) * dim.Width,
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    color: 'black',
  },
  textAlignment1: {
    color: '#44FFFF',
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    margin: (10 / dim.w) * dim.Width,
    textAlign: 'center',
  },
  infoBox: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: (30 / dim.w) * dim.Width,
    marginVertical: (5 / dim.w) * dim.Width,
    padding: (5 / dim.w) * dim.Width,
    width: dim.Width - 60,
    borderRadius: 10,
    height: (40 / dim.w) * dim.Width,
    backgroundColor: '#F1F5FF',
  },

  textAlignment2: {
    color: 'black',
    fontFamily: 'Questv1 Regular',
    textAlign: 'right',
    fontSize: 12,
  },
  textAlignment3: {
    color: '#898989',
    fontFamily: 'Questv1 Regular',
    textAlign: 'left',
    fontSize: 12,
  },
  textAlignment4: {
    color: '#00A4C4',
    fontFamily: 'Questv1 Regular',
    fontSize: 10,
    margin: 3,
    textAlign: 'center',
  },
});
export default ArabicProfileScreen;
