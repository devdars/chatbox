import React, { useCallback, useEffect, useReducer, useState,} from "react";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Input from "../components/Input";
import { validateInput } from "../utils/actions/formValidation";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";
import { async } from "validate.js";
import { Alert, ActivityIndicator } from "react-native";
import colours from "../constants/colours";


const initialState = {
    inputValues:{
        firstName : "",
        lastName : "",
        email : "",
        password : "",
    },
    inputValidities: {
        firstName : false,
        lastName : false,
        email : false,
        password : false,
    },
    formIsValid : false
}
const SignUp = props =>{

    
    const  [error, setError] = useState();
    const  [isLoading, setIsLoading] = useState(false);
    const [formState, dispatchFormState] = useReducer(reducer, initialState );


    const inputChangeHandler = useCallback((inputId, inputValue) => {
        const result = (validateInput(inputId, inputValue));
        dispatchFormState({inputId, validationResult: result, inputValue});
    }, [dispatchFormState]);

    useEffect(() => {
        if(error){
            Alert.alert("An error occured", error);
        }
    }, [error])

    const authHandler = async() =>{
      try{
        setIsLoading(true);
        await signUp(
            formState.inputValues.firstName,
            formState.inputValues.lastName,
            formState.inputValues.email,
            formState.inputValues.password,
        );
        setError(null);
      }
      catch(error){
        setError(error.message);
        setError(null);
        setIsLoading(false);
      }
    }

    return(
        <>
        <Input id ="firstName" label="First name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities["firstName"]} />
        <Input id ="lastName" label="Last name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities["lastName"]}/>
        <Input id="email" label="Email" icon="mail" iconPack={Feather} onInputChanged={inputChangeHandler} autoCapitalize="none" keyboardType="email-address" errorText={formState.inputValidities["email"]}/>
        <Input id="password" label="Password" icon="key" iconPack={MaterialCommunityIcons} onInputChanged={inputChangeHandler} autoCapitalize="none" secureTextEntry errorText={formState.inputValidities["password"]}/>
        {
            isLoading ?
            <ActivityIndicator size={'small'} color={colours.primary} style={{marginTop: 10}}/>
            :
            <SubmitButton title="Sign up"
            onPress={authHandler}
            style={{marginTop: 20}} disabled = {!formState.formIsValid}
        />}
        </>
    );


};
export default SignUp;