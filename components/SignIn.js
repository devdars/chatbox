import React from "react";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Input from "../components/Input";
import { useCallback, useReducer } from "react";
import { reducer } from "../utils/reducers/formReducer";

import { validateInput } from "../utils/actions/formValidation";

const initialState = {
    inputValues:{
        email : "",
        password : "",
    },
    inputValidities: {
        email : false,
        password : false,
    },
    formIsValid : false
}

const SignIn = props =>{
    
    
    const [formState, dispatchFormState] = useReducer(reducer, initialState );

    const inputChangeHandler = useCallback((inputId, inputValue) => {
        const result = (validateInput(inputId, inputValue));
        dispatchFormState({inputId, validationResult: result, inputValue});
    }, [dispatchFormState])

    return(
        <>
        <Input id="email" label="Email" icon="mail" iconPack={Feather} autoCapitalize="none" keyboardType="email-address" onInputChanged={inputChangeHandler} errorText={formState.inputValidities["email"]}/>
        <Input id="password" label="Password" icon="key" iconPack={MaterialCommunityIcons} autoCapitalize="none" secureTextEntry onInputChanged={inputChangeHandler} errorText={formState.inputValidities["password"]} />
        <SubmitButton title="Sign up"
        onPress={() => console.log("Pressed submit")}
    style={{marginTop: 20}}
disabled={!formState.formIsValid}
        />
        </>
    );


};
export default SignIn;