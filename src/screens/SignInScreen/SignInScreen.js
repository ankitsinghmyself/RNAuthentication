import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit, errors} = useForm();
  const onSignIn = data => {
    //validation
    console.log(data);

    // navigation.navigate('Home');
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          name={'username'}
          placeholder={'Username'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Username is required',
            },
          }}
        />
        <CustomInput
          name={'password'}
          placeholder={'Password'}
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignIn)} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPassword}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Sign Up"
          type="TERTIARY"
          onPress={onSignUp}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 400,
    maxHeight: 200,
  },
});
