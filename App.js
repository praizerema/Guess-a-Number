
import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header"
// import StartGame from './screens/startGameScreen';
import {AppLoading} from "expo"
import StartGame from "./screens/startGameScreen"
import GameScreen from "./screens/gameScreen"
import GameOver from "./screens/gameOverScreen"
import * as Font from "expo-font"

const fetchFonts = () =>{
  Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });
}
export default function App() {
  const [userNumber, setUserNumber] = useState()
  // const [] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)

  const [guessRounds, setGuessRounds] = useState(0)
if(!dataLoaded){
  return <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)} onError={(err)=> console.log(err)}/>
}
  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
const startGameHandler=(selectedNumber)=>{

setUserNumber(selectedNumber)
}
const gameOverHandler=(numberOfRounds)=>{
  console.log("Rounds App.jss:" + numberOfRounds)

setGuessRounds(numberOfRounds);
console.log("Rounds App.jss guess:" + guessRounds)

// setGuessRounds(0)
}
let content = <StartGame onStartGame ={startGameHandler}/>;
if(userNumber && guessRounds<=0){

  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
}else if(guessRounds > 0){
  content =<GameOver onRestart ={configureNewGameHandler} userNumber={userNumber} roundsNumber={guessRounds} />
}
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
