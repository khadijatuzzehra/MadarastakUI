import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const Login = () => {
  const route = useRoute();
  const {language} = route.params;
  console.log(language);
  const navigation = useNavigation();

  const handleLogin = language => {
    console.log('Function call to handle login');
    navigation.navigate('TabStack', {language});
  };

  return (
    <View>
      <Button title="Login" onPress={() => handleLogin('en')} />
    </View>
  );
};

export default Login;
