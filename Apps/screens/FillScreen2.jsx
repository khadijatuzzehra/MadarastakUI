import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Img from '../../assets/svgs/download.png';

function FillScreen2() {
  return (
    <View style={styles.container}>
      <Image source={Img} style={{height: 500, width: 500}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 500,
    width: 500,
  },
});
export default FillScreen2;
