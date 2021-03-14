import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

function ConMenu({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.gameTitle}>Conjugations</Text>

      <Text style={styles.subtitle}>Select the verb tense you wish to focus on.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Present Tense')}
      >
        <Text style={styles.buttonText}>
          Present Tense
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ConMenu

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc303',
    height: 1000
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
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 13,
    marginVertical: 5,
    marginBottom: 260,
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
    fontWeight: '500',
    paddingHorizontal: 55,
  }

});