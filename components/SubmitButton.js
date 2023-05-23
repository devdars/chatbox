import React from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";
import colours from "../constants/colours";



const SubmitButton = props =>{
    const enabledBgColor = props.color || colours.primary;
    const disabledBgColor = colours.lightgrey;
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor;
 return   <TouchableOpacity onPress={props.disabled ? () => {} : props.onPress}
            style={{...styles.button , ...props.style , ...{ backgroundColor: bgColor }}}>
            <Text style={{color: props.disabled ? colours.grey : 'white'}}>{props.title}</Text>
        </TouchableOpacity>
};

const styles = StyleSheet.create({
    button:{
        
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius:30,
        justifyContent: "center",
        alignItems: 'center'

    }
});

export default SubmitButton;