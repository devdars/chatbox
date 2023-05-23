import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SubmitButton from "../components/SubmitButton";

const AuthScreen = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <PageContainer>
        <Input label="First name" icon="user-o" iconPack={FontAwesome} />
        <Input label="Last name" icon="user-o" iconPack={FontAwesome} />
        <Input label="Email" icon="mail" iconPack={Feather} />
        <Input label="Password" icon="key" iconPack={MaterialCommunityIcons}/>
        <SubmitButton title="Sign up"
        onPress={() => console.log("Pressed submit")}
    style={{marginTop: 20}}
        />
      </PageContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});
export default AuthScreen;
