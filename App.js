import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() 
{
  const clickHandler = () =>{
    console.log("Clicked!")
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
      <Text style={styles.label}>Welcome!</Text>
      <StatusBar style="auto" />

      <Button title='Click Me' onPress={clickHandler}/> 
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  label:{
    color: 'black',
    fontSize: 18,
    
  }
});
