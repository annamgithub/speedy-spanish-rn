import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
console.disableYellowBox = true;

const Cards = [
  { noun: 'la noche', english: 'the night' },
  { noun: 'el niño', english: 'the boy' },
  { noun: 'la agua', english: 'the water' },
  { noun: 'la computadora', english: 'the computer' },
  { noun: 'la montaña', english: 'the mountain' },
  { noun: 'la mañana', english: 'the morning' },
  { noun: 'el sol', english: 'the sun' },
  { noun: 'la luna', english: 'the moon' },
  { noun: 'el perro', english: 'the dog' },
]

class CardRoot extends Component {
  constructor() {
    super()
    this.state = {
      cards: Cards,
      outOfCards: false,
      flipped: null,
    }
  }


  flipCard = () => {
    if (this.state.flipped === false) {
      this.setState({ flipped: true })

    } else {
      this.setState({ flipped: false })
    }
  };

  resetCardState = () => {
    this.setState({ flipped: null })
  }

  render() {

    const Card = ({ noun, english }) => {
      if (this.state.flipped === true) {
        { console.log('true'); }
        return (
          <View style={styles.boxShadow}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text} onPress={() => this.flipCard()}>{noun}</Text>
            </TouchableOpacity>
          </View>
        )
      }
      else if (this.state.flipped === false) {
        { console.log('false'); }
        return (
          <View style={styles.boxShadow}>
            <TouchableOpacity style={styles.cardFlipped}>
              <Text style={styles.text} onPress={() => this.flipCard()}>{english}</Text>
            </TouchableOpacity>
          </View>
        )
      } else {
        { console.log('null'); }
        return (
          <View>

            <View style={styles.boxShadow}>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.text} onPress={() => this.flipCard()}>{noun}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    }


    return (
      <View style={styles.container}>
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>Swipe left or right to move on to next card.</Text>
          <Text style={styles.instructionText}>Tap card to see translation.</Text>
        </View>
        <SwipeCards
          onDragRelease={() => this.resetCardState()}
          cards={this.state.cards}
          loop={false}
          renderCard={(cardData) => <Card {...cardData}

          />}
        />

      </View>
    )
  }
}
export default CardRoot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffe7b5',
    alignItems: 'center',
    marginBottom: '20%',
  },
  cardFlipped: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffd300',
    alignItems: 'center',
    marginBottom: '20%',
  },
  text: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '56%',
    paddingHorizontal: 35,
    width: 350,
    height: 550,
  },
  instructions: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '10%',
  },
  instructionText: {
    fontSize: 18,
    paddingHorizontal: 35,
    color: '#ccc'
  },
  boxShadow: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,
  }
});