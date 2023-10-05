import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { LoginProps } from '../types/data';
import { backgroundColor, cardBackground2, primaryColor, textColor } from '../global';
import MyHeader from './MyHeader';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

// web: 88410767948-c5ifmd2fg9c0jarhm9fhgtf508t8hah9.apps.googleusercontent.com
// ios: 88410767948-mb2oa3ruobe52r2ctvs378a3fvssm3id.apps.googleusercontent.com
// andriod: 88410767948-020354sqjhs6fucj1ajsvqhebgaf2sno.apps.googleusercontent.com

const LoginComponent: React.FC<LoginProps> = ({ onLogin, onRegister, navigate, forgotPassword, signUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [rememberMe, setRememberMe] = useState(false); 

  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const updateSecureTExtEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '215593517581-mdpooo1874qu1c7esu52huj095pr6toe.apps.googleusercontent.com',
    iosClientId: '215593517581-d2ph6nkf9mkqe6tj72bfveg58rbl2f9i.apps.googleusercontent.com',
    webClientId: '215593517581-6dmek378buevoh1mqfol6ht6e3cga59s.apps.googleusercontent.com'
  })
  const navigation = useNavigation();

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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={styles.title}>Login</Text>
        </View>
            <Pressable style={{ borderRadius: 8, backgroundColor: backgroundColor, padding: 8, flexDirection: 'row', height: 33, alignItems: 'center' }} onPress={navigate}>
              <Text style={{fontSize: 13}}>Guest Mode</Text>
            </Pressable>
            </View>
        {/* <Text style={styles.title}>{JSON.stringify(userInfo)}</Text> */}
       
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
      <View style={styles.rememberMeContainer}>
          <CheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
            title="Remember Me"
            checkedIcon="check-square" 
            uncheckedIcon="square" 
            checkedColor={primaryColor} 
            uncheckedColor='#ededed'
          />
          <Pressable onPress={forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>
        <TouchableOpacity style={styles.loginButton}>
        <Feather name="log-in" size={30} color='white'  style={{right: 100}}/>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpButton} onPress={signUp}>
        <Feather name="log-in" size={30} color={primaryColor} style={{right: 93}}/>
          <Text style={styles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.container3}>
        <View style={styles.divider} />
      <Text style={styles.text}>Sign in with</Text>
      <View style={styles.divider} />
      </View>
        <View style={styles.container2}>
      <TouchableOpacity style={styles.googleButton} onPress={()=> promptAsync()}>
        <FontAwesome name="google" size={30} color={primaryColor}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignIn}>
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
  action: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText3: {
    color: primaryColor,
    fontWeight: '600',
    fontSize: 22,
  },
  buttonText2: {
    color: primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '35%',
    alignItems: 'center',
    alignSelf: 'center',
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

export default LoginComponent;
