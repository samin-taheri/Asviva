import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { LoginProps } from '../types/data';
import { backgroundColor, cardBackground2, primaryColor } from '../global';
import MyHeader from './MyHeader';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

// web: 88410767948-c5ifmd2fg9c0jarhm9fhgtf508t8hah9.apps.googleusercontent.com
// ios: 88410767948-mb2oa3ruobe52r2ctvs378a3fvssm3id.apps.googleusercontent.com
// andriod: 88410767948-020354sqjhs6fucj1ajsvqhebgaf2sno.apps.googleusercontent.com

const LoginComponent: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '215593517581-mdpooo1874qu1c7esu52huj095pr6toe.apps.googleusercontent.com',
    iosClientId: '215593517581-d2ph6nkf9mkqe6tj72bfveg58rbl2f9i.apps.googleusercontent.com',
    webClientId: '215593517581-6dmek378buevoh1mqfol6ht6e3cga59s.apps.googleusercontent.com'
  })

  const handleAppleSignIn = () => {
    // Handle Apple sign-in logic here
  };


  async function handleGoogleSignIn() {
   const user = await AsyncStorage.getItem("@user");
   if(!user){
    if(response?.type === 'success'){
    await getUserInfo(response.authentication?.accessToken);
    }
   } else {
    setUserInfo(JSON.parse(user));
   }
  }

const getUserInfo  = async(token: any) => {
    if(!token) return;
    try {
        const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers: { Authorization: `Bearer ${token}`}
            }
        );
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);

    } catch (error) {
        console.error(error);
    }
}
useEffect(()=> {
    handleGoogleSignIn();
}, [response]);

  return (
    <View>
        <MyHeader showLogoWithoutBack>
        <Text style={styles.title}>Login</Text>
        {/* <Text style={styles.title}>{JSON.stringify(userInfo)}</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.container3}>
        <View style={styles.divider} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.divider} />
      </View>
        <View style={styles.container2}>
      <TouchableOpacity style={styles.googleButton} onPress={()=> promptAsync()}>
        <FontAwesome name="google" size={30} color={primaryColor} style={{paddingRight: '10%'}}/>
        <Text style={styles.buttonText2}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignIn}>
        <FontAwesome name="apple" size={30} color={primaryColor} style={{paddingRight: '11%'}}/>
        <Text style={styles.buttonText2}>Continue with Apple</Text>
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

export default LoginComponent;
