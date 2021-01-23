import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import Card from './components/Card';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };
  const gameOverHandler = (noOfRound) => {
    setGuessRound(noOfRound);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundNumber={guessRound}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// ****************----Camera-------***********
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/logo.png';
// import * as ImagePicker from 'expo-image-picker';
// import * as Sharing from 'expo-sharing';

// export default function App() {
//   const [selectedImage, setSelectedImage] = React.useState(null);

//   let openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (permissionResult.granted === false) {
//       alert('permission to access the camera is required');
//     }
//     // let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     // if (pickerResult.cancelled === true) {
//     //   return;
//     // }
//     // setSelectedImage({ localUri: pickerResult.uri });

//     let captureImage = await ImagePicker.launchCameraAsync();
//     if (captureImage.cancelled === true) {
//       return;
//     }
//     setSelectedImage({ localUri: captureImage.uri });
//   };

//   let openShareDialogAsync = async () => {
//     if (!(await Sharing.isAvailableAsync())) {
//       alert('Uh Oh, Sharing isnot available in your platform');
//       return;
//     }
//     await Sharing.shareAsync(selectedImage.localUri);
//   };

//   if (selectedImage !== null) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{ uri: selectedImage.localUri }}
//           style={styles.thumbnail}
//         />
//         <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
//           <Text style={styles.buttonText}>Share this photo</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={logo} style={styles.logo} />
//       <Text>NYC</Text>
//       <Image
//         source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
//         style={styles.logo}
//       />
//       <Text style={styles.instructions}>
//         Press the button below to share your pictures
//       </Text>
//       <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
//         <Text style={styles.buttonText}>Select picture from your device</Text>
//       </TouchableOpacity>
//       <StatusBar style='auto' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   instructions: {
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 10,
//   },
//   logo: {
//     width: 305,
//     height: 159,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   thumbnail: {
//     width: 300,
//     height: 300,
//     resizeMode: 'contain',
//   },
// });
