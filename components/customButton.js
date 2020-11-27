import React from "react"
import {StyleSheet, TouchableOpacity, Text } from "react-native"
import Colors from "../constants/colors"
const CustomButton = (props) =>{
    return(
        <TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.onPress} >
            <Text style={styles.btnTxt}>{props.children}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
backgroundColor: Colors.primary,
borderRadius: 10,
padding:10
    },
    btnTxt:{
        color: "#fff",
        textAlign: "center"
    }
})
export default CustomButton