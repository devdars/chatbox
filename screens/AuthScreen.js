import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { TouchableOpacity } from "react-native";
import colours from "../constants/colours";

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView>
        <View>
          <Text style={styles.header}>ChatBox.</Text>
        </View>
        {
          isSignUp ?
          <SignUp/> :
          <SignIn/>
        }
        <TouchableOpacity style={styles.linkContainer} onPress = {() => setIsSignUp(prevState => !prevState)}>
          
          <Text style={styles.link}> 
            {`Switch to ${isSignUp ? "Sign in" : "Sign up"}`}
          </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    
  
  },
  link:{
    color: colours.blue,
    fontFamily: 'medium',
    letterSpacing: 0.3
  },
  header:{
    fontFamily: 'bold',
    fontSize: 30,
    paddingLeft: 105,
    
    
  }
  
});
export default AuthScreen;
