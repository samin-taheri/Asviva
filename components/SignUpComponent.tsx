import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SignUpProps } from '../types/data';
import { backgroundColor, cardBackground2, primaryColor } from '../global';
import MyHeader from './MyHeader';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SignUpComponent: React.FC<SignUpProps> = ({  navigate, signUp, back }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    secureTextEntryConfirm: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const updateSecureTExtEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  const updateSecureTExtEntryConfirm = () => {
    setData({
      ...data,
      secureTextEntryConfirm: !data.secureTextEntryConfirm
    });
  }

  return (
    <View>
        <MyHeader onPress={back}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Sign Up</Text>
            <Pressable style={{ borderRadius: 8, backgroundColor: backgroundColor, padding: 8, flexDirection: 'row', height: 33, alignItems: 'center' }} onPress={navigate}>
              <Text style={{fontSize: 13}}>Guest Mode</Text>
            </Pressable>
            </View>
       
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
       <View style={styles.action}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={data.secureTextEntry ? true : false}
      />
      <TouchableOpacity onPress={updateSecureTExtEntry} style={{right: '60%', top: '4%'}}>
                {data.secureTextEntry ?
                <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                  />
                  :
                  <Feather
                    name="eye"
                    color="grey"
                    size={20}
                  />
                }
        </TouchableOpacity>
        </View>
        <View style={styles.action}>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={data.secureTextEntryConfirm ? true : false}
      />
      <TouchableOpacity onPress={updateSecureTExtEntryConfirm} style={{right: '60%', top: '4%'}}>
                {data.secureTextEntryConfirm ?
                <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                  />
                  :
                  <Feather
                    name="eye"
                    color="grey"
                    size={20}
                  />
                }
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
        <Feather name="log-in" size={30} color='white'  style={{right: 113}}/>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpButton} onPress={signUp}>
        <Feather name="log-in" size={30} color={primaryColor} style={{right: 120}}/>
          <Text style={styles.buttonText2}>Login</Text>
        </TouchableOpacity>
        <View style={styles.container3}>
        <View style={styles.divider} />
      <Text style={styles.text}>Sign up with</Text>
      <View style={styles.divider} />
      </View>
        <View style={styles.container2}>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={30} color={primaryColor}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton}>
        <FontAwesome name="apple" size={30} color={primaryColor}/>
      </TouchableOpacity>
    </View>
      </MyHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    paddingLeft: 5
  },
    image: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  SignUpButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 12,
    height: 50,
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: backgroundColor
  },
  buttonContainer: {
    flexDirection: 'row', 
    flex: 1,
    paddingTop: 10
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: primaryColor,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
  },
  buttonText3: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 22,
  },
  buttonText2: {
    color: primaryColor,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '35%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  googleButton: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 30,
    height: 62,
    width: 62,
    right: 7
  },
  appleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 30,
    height: 62,
    width: 62,
    left: 7
  },

  dividerContainer: {
    width: 30,
    alignItems: 'center',
},
divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#c0c1c3',
  },
  text: {
    color: '#c0c1c3',
    paddingHorizontal: 10, 
    fontSize: 16, 
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
  },
  checkBoxText: {
    color: '#c0c1c3',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: primaryColor,
    textDecorationLine: 'underline',
    textAlign: 'right',
    paddingRight: 10,
    paddingTop: 0,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  SigninButton: {
    width: 100,
    height: 40,
    backgroundColor: cardBackground2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 10,
    marginTop: -3
  }
});

export default SignUpComponent;
