import React from "react";
import {Text, View, Button, StyleSheet, Image} from "react-native"
import BodyText from "../components/bodyText";
import Colors from "../constants/colors"

import DefaultStyles from  "../constants/defaultStyle"


const GameOver= (props)=>{
return <View style={styles.screen}>
    <BodyText style={DefaultStyles.bodyText}>Game Over!</BodyText>
<Image source={require("../assets/images/winner.png")} resizeMode="contain" />
<View style={styles.highlightTextContainer}>
<BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlightText}>{props.roundsNumber}</Text>  rounds to guess the number <Text style={styles.highlightText}>{props.userNumber}</Text> 

    </BodyText>
</View>
    

      <Button title="NEW GAME" onPress={props.onRestart} />
</View>
}
const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent:'center',
    alignItems:"center"
},
highlightText:{
color: Colors.accent,
fontFamily: "open-sans-bold",
},
highlightTextContainer:{
    paddingHorizontal:40,
    marginVertical:20

},
resultText:{
    textAlign:"center",
    fontSize: 18

}
// gameOverTxt:{
//     fontFamily: "open-sans",
//         fontSize: 16,
//         marginVertical:10
// },
// enteredNoTxt:{
//     fontFamily: "open-sans",
//     fontSize: 16,
//     marginVertical: 10  
// },
// noGuessTxt:{
//     fontFamily: "open-sans",
//     fontSize: 16,
//     marginBottom:15
// }
})
export default GameOver