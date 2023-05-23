import { StyleSheet, TextInput, View, Text } from "react-native";
import colours from "../constants/colours";
import { FontAwesome } from '@expo/vector-icons';

const Input = props =>{
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.inputContainer}>
        {
           props.icon && <props.iconPack name={props.icon} 
            size={props.iconSize || 15} 
            style={styles.icon}/>

            }
            <TextInput style={styles.input}/>

        </View>
        {
            props.errorText &&
            <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{props.errorText}</Text>

        </View>}
    </View>
};

const styles = StyleSheet.create({
    container: {
       width: '100%',

    },
    inputContainer:{
        width: '100%',
        backgroundColor: colours.nearlyWhite,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    icon:{
        marginRight: 10,
        color: colours.grey
    },
    label:{
        marginVertical: 8,
        fontFamily: 'bold',
        letterSpacing: 0.3,
        color: colours.textColor
    },
    input:{
        color: colours.textColor,
        flex: 1,
        fontFamily: 'regular',
        letterSpacing: 0.3,
        paddingTop: 0

    },
    errorContainer:{
        marginVertical: 5
    },
    errorText:{
        color: 'red',
        fontSize: 13,
        fontFamily: 'regular',
        letterSpacing: 0.3
    }
})
export default Input;