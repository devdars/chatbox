import React, { useCallback, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";
import backgroundImage from '../assets/droplet.jpeg';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colours from "../constants/colours";
const ChatScreen = (props) => {

    const [messageText, setMessageText] = useState("");
    const sendMessage = useCallback(() => {
      setMessageText("");
    }, [messageText]);
  return (
    <SafeAreaView
    edges={['right', 'left', 'bottom']} 
    style={styles.container}>
      <KeyboardAvoidingView 
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" :undefined}
      keyboardVerticalOffset={100}
      >
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        </ImageBackground>

        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.media} onPress={() => console.log("Pressed")}>
            <Ionicons name="add" size={24} color={colours.blue} />
            </TouchableOpacity>
            <TextInput   
            style={styles.textbox}
            value={messageText}
            onChangeText={text => setMessageText(text)}
            onSubmitEditing={sendMessage}
            />
            {messageText === "" && <TouchableOpacity style={styles.media} onPress={() => console.log("Pressed")}>
            <Ionicons name="camera-outline" size={24} color={colours.blue}/>
            </TouchableOpacity>}

            {messageText != "" && 
            <TouchableOpacity style={styles.media} onPress={sendMessage}>
            <Ionicons name="ios-send-sharp" size={22} color={colours.blue} />
            </TouchableOpacity>}
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  screen:{
    flex:1
  },
  backgroundImage:{
    flex: 1,
  },
  inputContainer:{
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal:10,
    height: 50
  },
  textbox:{
    flex:1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colours.lightgrey,
    marginHorizontal: 15,
    paddingHorizontal: 12
  },
  media:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
  },
 
});
export default ChatScreen;
