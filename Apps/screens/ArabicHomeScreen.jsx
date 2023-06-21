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
import dim from '../../utils/dim';

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
    height: (220 / dim.w) * dim.Width,
    width: dim.Width,
  },
  profilePicture: {
    height: (60 / dim.w) * dim.Width,
    width: (60 / dim.w) * dim.Width,
    marginRight: (200 / dim.w) * dim.Width,
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
    height: (40 / dim.w) * dim.Width,
    width: dim.Width / 2,
  },
  overlay: {
    position: 'absolute',
    top: (40 / dim.w) * dim.Width,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay2: {
    position: 'absolute',
    top: (40 / dim.w) * dim.Width,
    marginRight: (35 / dim.w) * dim.Width,
    alignItems: 'flex-start',
  },
  vector: {
    alignItems: 'flex-end',
  },
  searchBar: {
    position: 'absolute',
    marginTop: (160 / dim.w) * dim.Width,
    marginHorizontal: (20 / dim.w) * dim.Width,
    width: dim.Width - 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarText: {
    height: 45,
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    marginLeft: (dim.Width - 60) / 2,
    paddingBottom: (25 / dim.w) * dim.Width,
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
    marginHorizontal: (20 / dim.w) * dim.Width,
  },
  textAlignment: {
    flexDirection: 'row-reverse',
    marginTop: (25 / dim.w) * dim.Width,
    marginHorizontal: (25 / dim.w) * dim.Width,
  },
  textAlignment1: {
    color: 'black',
    fontFamily: 'Questv1 Regular',
  },
  textAlignment2: {
    color: 'gray',
    fontFamily: 'Questv1 Regular',
    marginRight: (140 / dim.w) * dim.Width,
  },
  textAlignment3: {
    color: 'black',
    fontFamily: 'Questv1 Regular',
    fontSize: 14,
    margin: (2 / dim.w) * dim.Width,
  },
  textAlignment4: {
    color: '#00A4C4',
    fontFamily: 'Questv1 Regular',
    fontSize: 10,
    margin: (2 / dim.w) * dim.Width,
    textAlign: 'center',
  },
  rows: {
    flexDirection: 'row',
    margin: (2 / dim.w) * dim.Width,
  },
  btn: {
    height: (200 / dim.w) * dim.Width,
    width: (160 / dim.w) * dim.Width,
    backgroundColor: '#F1F5FF',
    margin: (8 / dim.w) * dim.Width,
    flexDirection: 'column',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ArabicHomeScreen;
