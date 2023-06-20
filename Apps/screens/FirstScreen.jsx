import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();

  const handleLogin = language => {
    if (language === 'English') {
      navigation.navigate('Language', {language});
    }
    if (language === 'Arabic') {
      navigation.navigate('ArabicLang', {language});
    }
  };

  return (
    <View style={styles.container}>
      <Button title="English" onPress={() => handleLogin('English')} />
      <View style={styles.gap}></View>
      <Button title="Arabic" onPress={() => handleLogin('Arabic')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 90,
  },
  gap: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
export default FirstScreen;
