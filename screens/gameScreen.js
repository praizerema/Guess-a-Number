import React, {useState, useRef, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from "react-native"
import NumberContainer from "../components/numberContainer"
import Card from "../components/card"
import BodyText from "../components/bodyText"
// import DefaultStyles from  "../constants/defaultStyle"

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }

}
const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const {userChoice, onGameOver} = props
    useEffect(() => {
        if (currentGuess === userChoice) {

            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver])
    const moreGuessHandler = (direction) => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie !", "You know that this is wrong....")
            return
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess

        } else {
            currentLow.current = currentGuess

        }
        const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNum)
        setRounds(currentRnds => currentRnds + 1)


    }
    return (
        <View style={
            styles.screen
        }>
            <BodyText>Opponent's guess
            </BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={
                styles.btnContainer
            }>
                <View style={
                    styles.button
                }>
                    <Button title="lower"
                        onPress={
                            moreGuessHandler.bind(this, "lower")
                        }/></View>
                <View style={
                    styles.button
                }>

                    <Button title="higher"
                        onPress={
                            moreGuessHandler.bind(this, "greater")
                        }/>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    btnContainer: {
        flexDirection: "row",
        width: 300,
        maxWidth: "80%",
        justifyContent: "space-around",
        marginTop: 20
    },
    button: {
        width: 120
    },
    // oppoGueesTxt:{
    //     fontFamily: "open-sans",
    //     fontSize: 16
    // }
})
export default GameScreen
