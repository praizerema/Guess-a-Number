import React from "react";
import {Text, StyleSheet, View} from "react-native"
import colors from "../constants/colors";
import Colors from "../constants/colors"

const Number= (props)=>{
return      <View style={{...props.style , ...styles.selectedNumberContainer}}><Text style={styles.selectedNumber}>{props.children}</Text></View>

}
const styles = StyleSheet.create({
    selectedNumberContainer:{
        borderWidth:2,
        borderColor:Colors.accent,
        padding: 10,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10
    },
    selectedNumber:{
        fontSize: 22,
color: Colors.accent
    }
})
export default Number