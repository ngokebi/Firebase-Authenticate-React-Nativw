import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

import {Input, Button, CheckBox} from '@rneui/base';

const Authenticate = () => {
  const [register, SetRegister] = useState(false);

  const handleSubmit = async({email, password}) => {
      try {
        if (register) {
            const response = await auth().createUserWithEmailAndPassword(email, password);
            const {user} = response;
            console.log(user);
        } else {
            const response = await auth().signInWithEmailAndPassword(email, password);
            const {user} = response;
            console.log(user);
        }
      } catch (error) {
          
          console.log(error);
      }

  };
  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          email: yup
            .string()
            .email('Invalid Email Format')
            .required('Required'),
          password: yup
            .string()
            .min(6, 'Must be more than 6 character')
            .required('Password Required')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*_#?&])[A-Za-z\d@$!%*_#?&]{6,}$/,
              'Must C One Uppercase, One Lowercase, One Number and one special case Character',
            ),
        })}>
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          touched,
          errors,
        }) => (
          <View style={styles.view}>
            <Input
              placeholder="Enter Your Email"
              leftIcon={{type: 'material', name: 'email'}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              renderErrorMessage={errors.email && touched.email}
              errorMessage={errors.email}
              //   errorStyle={{marginHorizontal:30}}
              inputContainerStyle={
                {
                  //   marginHorizontal:30,
                  //   marginTop:30,
                }
              }
            />
            <Input
              placeholder="Enter Your Password"
              leftIcon={{type: 'material', name: 'fingerprint'}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              renderErrorMessage={errors.password && touched.password}
              errorMessage={errors.password}
              //   errorStyle={{marginHorizontal:30}}
              inputContainerStyle={
                {
                  //   marginHorizontal:30,
                }
              }
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <CheckBox
              title={register ? 'Register' : 'Login'}
              checked={register}
              onPress={() => SetRegister(!register)}
            />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: '10%',
  },
});
export default Authenticate;
