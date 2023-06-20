import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Searchbar, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Vector from '../../assets/svgs/Group 161.svg';
import User from '../../assets/svgs/user.png';

import Homework from '../../assets/svgs/Homeworks.svg';
import Timetable from '../../assets/svgs/Timetable.svg';
import Exams from '../../assets/svgs/Exams.svg';
import Fee from '../../assets/svgs/Fee.svg';

function ArabicHomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.overlay2}>
          <Text style={styles.text}>صباح الخير،</Text>
          <Text style={styles.textBottom}>مرحبا بكم في مدارستك</Text>
        </View>

        <View style={styles.vector}>
          <Vector style={styles.image} />
        </View>
        <View style={styles.searchBar}>
          <Searchbar
            style={styles.searchBarStyle}
            placeholder="ابحث في التطبيق"
            inputStyle={styles.searchBarText}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.overlay}>
          <Image style={styles.profilePicture} source={User} />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.content}>
          <View style={styles.textAlignment}>
            <Text style={styles.textAlignment1}>اكتشف الميزات</Text>
            <Text style={styles.textAlignment2}>مشاهدة الكل</Text>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity style={styles.btn}>
              <Homework />
              <Text style={styles.textAlignment3}>الواجبات المنزلية</Text>
              <Text style={styles.textAlignment4}>
                التقدم وتفاصيل{'\n'}
                العمل في المنزل
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Timetable />
              <Text style={styles.textAlignment3}>الجدول الزمني</Text>
              <Text style={styles.textAlignment4}>
                التقدم وتفاصيل{'\n'}
                الجدول الزمني
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity style={styles.btn}>
              <Exams />
              <Text style={styles.textAlignment3}>الامتحانات</Text>
              <Text style={styles.textAlignment4}>
                تقارير / نتائج{'\n'}
                الامتحانات
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Fee />
              <Text style={styles.textAlignment3}>مصاريف</Text>
              <Text style={styles.textAlignment4}>
                عرض الماضي والقادم{'\n'}
                المستحقات
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#226CA3',
  },
  profileContainer: {
    flexDirection: 'row-reverse',
    position: 'relative',
    backgroundColor: '#226CA3',
    height: '32%',
    width: '100%',
  },
  profilePicture: {
    height: 70,
    width: 70,
    marginRight: 250,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    color: '#4FC4D8',
    lineHeight: 40,
    fontSize: 20,
    fontFamily: 'Questv1 Regular',
  },
  textBottom: {
    color: 'white',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    fontStyle: 'normal',
  },
  image: {
    height: '20%',
    width: '90%',
  },
  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay2: {
    position: 'absolute',
    top: '20%',
    marginRight: '10%',
    alignItems: 'flex-end',
  },
  vector: {
    alignItems: 'flex-end',
  },
  searchBar: {
    position: 'absolute',
    marginTop: '40%',
    marginHorizontal: '8%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarText: {
    height: 45,
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    paddingBottom: 25,
    marginLeft: '50%',
  },
  searchBarStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  content: {
    marginHorizontal: '5%',
  },
  textAlignment: {
    marginTop: '8%',
    flexDirection: 'row-reverse',
    marginHorizontal: '10%',
  },
  textAlignment1: {
    color: 'black',
    fontFamily: 'Questv1 Regular',
  },
  textAlignment2: {
    color: 'gray',
    fontFamily: 'Questv1 Regular',
    marginRight: '40%',
  },
  textAlignment3: {
    color: 'black',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    margin: 3,
  },
  textAlignment4: {
    color: '#00A4C4',
    fontFamily: 'Questv1 Regular',
    fontSize: 10,
    margin: 3,
    textAlign: 'center',
  },
  rows: {
    flexDirection: 'row',
    margin: '1%',
  },
  btn: {
    height: 220,
    width: 170,
    backgroundColor: '#F1F5FF',
    margin: 8,
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ArabicHomeScreen;
