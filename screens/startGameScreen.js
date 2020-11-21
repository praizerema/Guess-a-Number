import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
    /*Keyboard is an API provided by react native, Alert is an object to call a native api*/
} from "react-native"
import Card from "../components/card"
import Colors from "../constants/colors"
import Input from "../components/input"
import Number from "../components/numberContainer"

const StartGame = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)

    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { //use isNaN() instead of the equality check
            Alert.alert("Invalid Number", "Number has to be anumber between 0 and 99.", [{text: 'okay',style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
        Keyboard.dismiss();
    }
    let confirmedOuput
    if(confirmed){
        confirmedOuput= <Card style={styles.confirmCard}> 
            <Text>You Selected</Text>
            <Number>{selectedNumber}</Number>
            <Button title="Start Game" onPress={()=>{}} color={Colors.primary}/>
            </Card>
    }
    return (
        <TouchableWithoutFeedback onPress= {() => {
                                            Keyboard.dismiss();
                                            }}>
            <View style={
                styles.screen
            }>
                <Text style={
                    styles.title
                }>
                    Start a New Game
                </Text>
                {/* <View style={styles.inputContainer}> */}
                <Card style={
                    styles.inputContainer
                }>
                    <Text>Select a Number</Text>
                    <Input style={
                            styles.input
                        }
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}/>
                    <View style={
                        styles.buttonContainer
                    }>
                        <View style={
                            styles.button
                        }>
                            <Button title="reset"
                                onPress={resetInputHandler}
                                color={
                                    Colors.accent
                                }/>
                        </View>
                        <View style={
                            styles.button
                        }>

                            <Button title="confirm"
                                onPress={confirmInputHandler}
                                color={
                                    Colors.primary
                                }/>
                        </View>
                    </View>
                </Card>
                {confirmedOuput}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        // alignItems:"center",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginTop: 15
    },
    title: {
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center'
    },
    button: {
        width: "40%",
        fontSize: 11
    },
    input: {
        width: 70,
        textAlign: "center"
    },
    confirmCard:{
        marginTop: 20,
        paddingHorizontal: 20,
        alignItems:"center",
    },
    selectedNumberContainer:{
        alignItems:"center",
        marginVertical:10
    },
    selectedNumber:{
        fontSize: 20

    }
})
export default StartGame
