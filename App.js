import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  async function playSound(soundFile) {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(soundFile);
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Play Sound 1" onPress={() => playSound(require('./assets/soundfile1.wav'))} />
      <Button title="Play Sound 2" onPress={() => playSound(require('./assets/soundfile2.wav'))} />
      <Button title="Play Sound 3" onPress={() => playSound(require('./assets/soundfile3.wav'))} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
