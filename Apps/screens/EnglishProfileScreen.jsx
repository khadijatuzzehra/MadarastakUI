import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Searchbar, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import User from '../../assets/svgs/user.png';
import Vector from '../../assets/svgs/Group 161.svg';
import Verified from '../../assets/svgs/verified.png';

import Homework from '../../assets/svgs/Homeworks.svg';
import Timetable from '../../assets/svgs/Timetable.svg';
import Exams from '../../assets/svgs/Exams.svg';
import Fee from '../../assets/svgs/Fee.svg';

function EnglishProfileScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const handleLogin = language => {};

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.overlay}>
          <Image source={User} style={styles.profilePicture} />
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
        <Text style={styles.textAlignment}>User Details:</Text>
        <View style={styles.infoBox}>
          <View style={styles.leftContainer}>
            <Text style={styles.textAlignment2}>Father's Name</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.textAlignment3}>Naeem Haris</Text>
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>Gender</Text>
          <Text style={styles.textAlignment3}>Male</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>Date of Birth</Text>
          <Text style={styles.textAlignment3}>06/January/1996</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>Subject</Text>
          <Text style={styles.textAlignment3}>Lorem ipsum</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textAlignment2}>Language</Text>
          <Text style={styles.textAlignment3}>English</Text>
        </View>

        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => handleLogin('')}>
          <Text style={styles.btnText}>Logout</Text>
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
    height: '32%',
    width: '100%',
  },
  profilePicture: {
    height: 120,
    width: 120,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },
  verified: {
    position: 'absolute',
    marginLeft: '60%',
    marginTop: '33%',
    height: 30,
    width: 30,
  },
  verifiedView: {
    position: 'absolute',
    height: 36,
    width: 36,
    marginLeft: 280,
    marginTop: 159,
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
    width: '85%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#4FC4D8',
    marginHorizontal: '8%',
    marginVertical: '5%',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontStyle: 'normal',
  },
  rowAlignment: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    top: '20%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay2: {
    top: '20%',
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
    marginTop: '8%',
    marginHorizontal: '9%',
    marginVertical: '5%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'black',
  },
  textAlignment1: {
    color: '#44FFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    margin: 8,
    textAlign: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '8%',
    marginVertical: '1%',
    padding: '3%',
    width: '85%',
    height: 45,
    backgroundColor: '#F1F5FF',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textAlignment2: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left',
    fontSize: 12,
  },
  textAlignment3: {
    color: '#898989',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'right',
    fontSize: 12,
  },
  textAlignment4: {
    color: '#00A4C4',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    margin: 3,
    textAlign: 'center',
  },
});
export default EnglishProfileScreen;
