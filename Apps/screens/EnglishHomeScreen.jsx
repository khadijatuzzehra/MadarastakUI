import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Searchbar, DefaultTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/svgs/Clip path group.svg';
import Vector from '../../assets/svgs/Group 161.svg';

import Homework from '../../assets/svgs/Homeworks.svg';
import Timetable from '../../assets/svgs/Timetable.svg';
import Exams from '../../assets/svgs/Exams.svg';
import Fee from '../../assets/svgs/Fee.svg';

function EnglishHomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.overlay2}>
          <Text style={styles.text}>Good Morning,</Text>
          <Text style={styles.textBottom}>Welcome to Madarastak</Text>
        </View>

        <View style={styles.vector}>
          <Vector style={styles.image} />
        </View>
        <View style={styles.searchBar}>
          <Searchbar
            style={styles.searchBarStyle}
            placeholder="Search in App"
            inputStyle={styles.searchBarText}
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.overlay}>
          <Logo style={styles.profilePicture} />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.content}>
          <View style={styles.textAlignment}>
            <Text style={styles.textAlignment1}>Explore Features</Text>
            <Text style={styles.textAlignment2}>View All</Text>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity style={styles.btn}>
              <Homework />
              <Text style={styles.textAlignment3}>Homeworks</Text>
              <Text style={styles.textAlignment4}>
                Progress & details of{'\n'}
                Homework
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Timetable />
              <Text style={styles.textAlignment3}>Timetable</Text>
              <Text style={styles.textAlignment4}>
                Progress & details of{'\n'}
                Timetable
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity style={styles.btn}>
              <Exams />
              <Text style={styles.textAlignment3}>Exams</Text>
              <Text style={styles.textAlignment4}>
                Reports / Results of{'\n'}
                Exams
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Fee />
              <Text style={styles.textAlignment3}>Fee</Text>
              <Text style={styles.textAlignment4}>
                View past & upcoming{'\n'}
                dues
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
    position: 'relative',
    backgroundColor: '#226CA3',
    height: '32%',
    width: '100%',
  },
  profilePicture: {
    height: 150,
    marginLeft: 250,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    color: '#4FC4D8',
    lineHeight: 40,
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  textBottom: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  textButton: {
    color: '#226CA3',
    fontFamily: 'Montserrat-SemiBold',
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
    marginLeft: '13%',
    alignItems: 'flex-start',
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    paddingBottom: 25,
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
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  textAlignment1: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  textAlignment2: {
    color: 'gray',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: '40%',
  },
  textAlignment3: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    margin: 3,
  },
  textAlignment4: {
    color: '#00A4C4',
    fontFamily: 'Montserrat-SemiBold',
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
export default EnglishHomeScreen;
