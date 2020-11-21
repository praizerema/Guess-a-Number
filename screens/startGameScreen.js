import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import Card from "../components/card"
import Colors from "../constants/colors"
const StartGame =(props)=>{
    return(
<View style={styles.screen}>
<Text style={styles.title}>
   Start a New Game
</Text>
{/* <View style={styles.inputContainer}> */}
    <Card style={styles.inputContainer}>
    <Text>Select a Number</Text>
<TextInput/>
<View style={styles.buttonContainer}>
    <View style={styles.button}>
    <Button title="reset" onPress={()=>{}} color={Colors.accent}/>
    </View>
    <View style={styles.button}>

    <Button title="confirm" onPress={()=>{}} color={Colors.primary}/>
    </View>
</View>
</Card>
</View>
    )
}
const styles = StyleSheet.create({
screen:{
    flex: 1,
    padding: 10,
    alignItems: "center"
},
buttonContainer:{
    flexDirection:"row",
    // alignItems:"center",
    width: "100%",
    justifyContent:"space-between",
    paddingHorizontal:10
},
title:{
    fontSize: 20,
    marginVertical:10,

},
inputContainer:{
    width: 300,
    maxWidth: "80%",
    alignItems:'center',
    // shadowColor:"black",
    // shadowOffset:{width:0, height: 3},
    // shadowOpacity:0.5,
    // shadowRadius:6,
    // elevation:5,
    // backgroundColor:"#fff",
    // paddingVertical:20,
    // borderRadius: 10
},
button:{
    width:"40%"
}
})
export default StartGame