import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Image from '../images/flamenco.png'
// Image from Pixabay by AnaaliseArt https://pixabay.com/illustrations/flamenco-dancer-woman-spain-dancer-5317023/


function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={Image} style={styles.flamenco}>
        <View style={styles.words}>
          <Text style={styles.gameTitle}>Speedy Spanish</Text>
          <Text style={styles.subtitle}>Vocabulary and conjugation drills for people who want to learn fast.</Text>
          <TouchableOpacity
            style={styles.button}
            title='Vocabulary'
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text style={styles.buttonText}>
              Vocabulary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Conjugations')}
          >
            <Text style={styles.buttonText}>
              Conjugations
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View >
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc303',
    height: 1000
  },
  words: {
    width: 325,
    textAlign: 'center',
    top: 400,
  },
  gameTitle: {
    fontSize: 35,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: '900',
  },
  subtitle: {
    color: '#333',
    fontSize: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  flamenco: {
    width: 315,
    height: 350,
    marginBottom: 570,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 13,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: '#eee',
    fontSize: 20,
    fontWeight: '500'
  }

});
