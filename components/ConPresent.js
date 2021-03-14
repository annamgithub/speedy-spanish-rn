import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { sentences } from './Sentences'

const objValues = Object.values(sentences)
let gameData = objValues;

//Shuffle Function (Fisher-Yates)
function shuffle(arrToShuffle) {
    let m = arrToShuffle.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = arrToShuffle[m];
        arrToShuffle[m] = arrToShuffle[i];
        arrToShuffle[i] = t;
    }
    return arrToShuffle;
}


class ConPresent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultView: true,
            answeredCorrectly: '',
        }
    }

    // Function to move to the next question
    moveToNext = () => {
        let gameData = shuffle(objValues)
        console.log(gameData);
        this.setState({ defaultView: true, answeredCorrectly: '' })
    }

    render() {
        // START OF FOR-LOOP: Entire game under a for-loop
        for (let i = 0; i < gameData.length; i++) {

            // Function to insert blank into Spanish question
            function spanishQWithBlank() {
                let arr = gameData[i].es.split(" ")
                let lengthArr = arr.length;
                let index = 0;

                for (index >= 0; index < lengthArr; index++) {
                    if (arr[index].toLowerCase() === gameData[i].conjugatedVerb) {
                        let convertToStr = arr[index].toString()
                        let replaceWithBlank = gameData[i].es.replace(convertToStr, "______")
                        return replaceWithBlank
                    }
                }
            }

            // Variable Declarations within loop
            const choices = [gameData[i].conjugatedVerb, gameData[i].wrongAnswers[0], gameData[i].wrongAnswers[1], gameData[i].wrongAnswers[2]];
            const shuffled = shuffle(choices)
            const answerChoices = shuffled.map((choice, index) => ({
                label: choice,
                value: index,
            }))
            const correctAnswer = gameData[i].conjugatedVerb
            console.log("Correct Answer:", correctAnswer);

            if (this.state.defaultView === true && this.state.answeredCorrectly === '') {
                return (
                    // Default View - Start
                    <View style={styles.container}>
                        <View style={styles.questionSection}>
                            <Text style={styles.textSpanish}>{spanishQWithBlank()}</Text>
                            <Text style={styles.textEnglish}>{gameData[i].en}</Text>
                        </View>

                        <View style={styles.optionSection}>
                            {answerChoices.map((_obj, id) => (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                            return console.log("CORRECT!");
                                        } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                            return console.log("WRONG!");
                                        }
                                    }
                                    }
                                ><Text style={styles.buttonText}>
                                        {answerChoices[id].label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.answerSection}/>


                    </View>
                    // Default View - End
                )
            } else if (this.state.defaultView === false && this.state.answeredCorrectly === 'true') {
                return (
                    // View when correct answer is selected - Start
                    <View style={styles.container}>
                        <View style={styles.questionSection}>
                            <Text style={styles.textSpanish}>{gameData[i].es}</Text>
                            <Text style={styles.textEnglish}>{gameData[i].en}</Text>
                        </View>

                        <View style={styles.optionSection}>
                            {answerChoices.map((_obj, id) => (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                            return console.log("CORRECT!");
                                        } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                            return console.log("WRONG!");
                                        }
                                    }
                                    }><Text style={styles.buttonText}>
                                        {answerChoices[id].label}
                                    </Text>


                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.answerSection}>
                            <Text style={styles.textAnswerRight} onPress={() => this.moveToNext()}> Correct! Muy bien! </Text>

                            <Button
                                color="white"
                                title="⇨ NEXT QUESTION ⇨"
                                onPress={() => this.moveToNext()}
                            ></Button>
                        </View>
                    </View>
                    // View when correct answer is selected - End
                )
            } else if (this.state.defaultView === false && this.state.answeredCorrectly === 'false') {
                return (
                    // View when wrong answer is selected - Start
                    <View style={styles.container}>
                        <View style={styles.questionSection}>
                            <Text style={styles.textSpanish} >{gameData[i].es}</Text>
                            <Text style={styles.textEnglish}>{gameData[i].en}</Text>
                        </View>

                        <View style={styles.optionSection}>
                            {answerChoices.map((_obj, id) => (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                            return console.log("CORRECT!");
                                        } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                            this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                            return console.log("WRONG!");
                                        }
                                    }
                                    }><Text style={styles.buttonText}>
                                        {answerChoices[id].label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.answerSection} >
                            <Text style={styles.textAnswerWrong} onPress={() => this.moveToNext()}>Incorrect! The right answer is <Text style={styles.underline}>{correctAnswer}</Text>.</Text>
                            <Button
                                color="white"
                                title="⇨ NEXT QUESTION ⇨"
                                onPress={() => this.moveToNext()}
                            ></Button>
                        </View>
                    </View>
                    // View when wrong answer is selected - End
                )
            }
        }
    }
}

export default ConPresent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50
    },
    textSpanish: {
        marginTop: 150,
        color: 'white',
        fontSize: 26
    },
    textEnglish: {
        color: 'lightgray',
        fontSize: 22,
        fontStyle: 'italic',
        paddingTop: 30,

    },
    button: {
        alignItems: "center",
        backgroundColor: "#ffc303",
        borderRadius: 50,
        width: 325,
        marginHorizontal: 20,
        padding: 13,
        marginVertical: 10,
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
        color: '#333',
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 55,
    },
    textAnswerRight: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'green',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 100,
        width: 325,
        marginHorizontal: 20,
        padding: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textAnswerWrong: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 100,
        width: 325,
        marginHorizontal: 20,
        padding: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    underline: {
        textDecorationLine: 'underline'
    },
    questionSection: {
flex: 2,
    },
    optionSection: {
        flex: 2,

    },
    answerSection: {
        flex: 1,

    },
});