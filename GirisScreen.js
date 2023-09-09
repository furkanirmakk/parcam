import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  } from 'react-native';

const LoginScreen = ({ navigation }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    
    if (username === 'admin' && password === '123') {
      navigation.navigate('HomeTabs'); 
    } else {
      alert('Giriş Başarısız! Lütfen doğru kullanıcı adı ve şifre girin.');
    }
  };

  return (
    
   
    <View style={styles.container}>
      <Text style={styles.logo}>PARÇAM</Text>
      <View style={styles.inputView} >
      <TextInput
        style={styles.inputText}
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#003f5c"
        onChangeText={(text) => setUsername(text)}
      />
      </View>
      <View style={styles.inputView} >
      <TextInput
        style={styles.inputText}
        placeholder="Şifre"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      </View>
      <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
    </View>
    
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#DBDAD8",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:11,
    fontWeight:"bold",
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"red",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontWeight:"bold",
  }
     
    });


export default LoginScreen;
