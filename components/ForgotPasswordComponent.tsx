import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { ForgotPasswordProps } from '../types/data';
import { backgroundColor, cardBackground2, primaryColor } from '../global';
import MyHeader from './MyHeader';

const ForgotPasswordComponent: React.FC<ForgotPasswordProps> = ({ onForgotPassword, back }) => {
  const [username, setUsername] = useState('');
  
  return (
    <View>
        <MyHeader onPress={back}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>Forgot Password</Text>
            </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Get Verification Code</Text>
        </TouchableOpacity>

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
    fontWeight: 'bold',
    marginBottom: 20,
  },
    image: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 12,
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
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: primaryColor,
    fontWeight: 'bold',
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  googleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 12,
    height: 50,
    width: '100%'
  },
  appleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cardBackground2, 
    borderRadius: 12,
    height: 50,
    width: '100%',
    marginTop: 20
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
});

export default ForgotPasswordComponent;
