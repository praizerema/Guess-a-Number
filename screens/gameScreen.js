import React, {useState, useRef, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    ScrollView
} from "react-native"
import NumberContainer from "../components/numberContainer"
import Card from "../components/card"
import BodyText from "../components/bodyText"
// import DefaultStyles from  "../constants/defaultStyle"
import CustomButton from "../components/customButton"
import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }

}
const renderListItem= (value, noOfRound)=>(
    <View key={value} style={styles.listItem}>
        <BodyText>#{noOfRound}</BodyText>
        <BodyText>{value}</BodyText></View>
)
const GameScreen = (props) => {
    const [initialGuess, setInitialGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessList, setGuessList] = useState([initialGuess])

    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    const {userChoice, onGameOver} = props
    useEffect(() => {
        if (currentGuess === userChoice) {

            onGameOver(guessList.length)
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
            currentLow.current = currentGuess + 1

        }
        const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNum)

setGuessList(currGuess =>[nextNum, ...currGuess])
    }
    return (
        <View style={styles.screen}>
            <BodyText style={styles.title}>Opponent's guess
            </BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <View style={styles.button}>
                <CustomButton  onPress={moreGuessHandler.bind(this, "lower")}>
    {/* <Text>
    LOWER
    </Text> */}
    <Ionicons name="md-remove" size={24} color="white" />

</CustomButton>
                
                        </View>

                <View style={styles.button}>
<CustomButton onPress={moreGuessHandler.bind(this, "greater")}>
    {/* <Text>
    HiGHER
    </Text> */}
    <Ionicons name="md-add" size={24} color="white" />

</CustomButton>
                </View>
            </Card>
            <View style={styles.list}>
            <ScrollView>{guessList.map((pastGuess, index) => renderListItem(pastGuess, guessList.length - index))}</ScrollView>

            </View>
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
        width: 80
    },
    title:{
        fontFamily: "open-sans-bold",
        fontSize: 16
    },
    listItem:{
borderColor: "#ccc",
borderWidth: 1,
marginVertical: 10,
backgroundColor:"#f3f3f3",
flexDirection: "row",
padding:15,
justifyContent: "space-around"
    },
    list:{
        flex: 1,
        width:"80%"
    }
})
export default GameScreen
