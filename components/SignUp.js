import React, { useCallback, useReducer } from "react";
import SubmitButton from "../components/SubmitButton";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Input from "../components/Input";
import { validateInput } from "../utils/actions/formValidation";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";


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

    

    const [formState, dispatchFormState] = useReducer(reducer, initialState );


    const inputChangeHandler = useCallback((inputId, inputValue) => {
        const result = (validateInput(inputId, inputValue));
        dispatchFormState({inputId, validationResult: result, inputValue});
    }, [dispatchFormState]);

    const authHandler = () =>{
        signUp(
            formState.inputValues.firstName,
            formState.inputValues.lastName,
            formState.inputValues.email,
            formState.inputValues.password,
        )
    }

    return(
        <>
        <Input id ="firstName" label="First name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities["firstName"]} />
        <Input id ="lastName" label="Last name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangeHandler} errorText={formState.inputValidities["lastName"]}/>
        <Input id="email" label="Email" icon="mail" iconPack={Feather} onInputChanged={inputChangeHandler} autoCapitalize="none" keyboardType="email-address" errorText={formState.inputValidities["email"]}/>
        <Input id="password" label="Password" icon="key" iconPack={MaterialCommunityIcons} onInputChanged={inputChangeHandler} autoCapitalize="none" secureTextEntry errorText={formState.inputValidities["password"]}/>
        <SubmitButton title="Sign up"
        onPress={authHandler}
    style={{marginTop: 20}} disabled = {!formState.formIsValid}
        />
        </>
    );


};
export default SignUp;