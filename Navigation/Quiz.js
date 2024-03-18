import React from "react";
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const DEFAULT_OPTIONS = Array(4).fill(null);

const Quiz = ({ navigation,route }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([DEFAULT_OPTIONS])
    const [score, setScore] = useState(0)
    const [ans, setAns] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [correctness, setCorrectness] = useState(DEFAULT_OPTIONS);
    const{number}=route.params;
    const{catg}=route.params

    const getQuiz = async () => {
        setIsLoading(true)
        if(number==1){
            var url='https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==2){
            var url='https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==3){
            var url='https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==4){
            var url='https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==5){
            var url='https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986'
        }
        else if(number==6){
            var url='https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==7){
            var url='https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple&encode=url3986'
        }
        else if(number==8){
            var url='https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986'
        }
        const res= await fetch(url)
        const data = await res.json();

        setQuestions(data.results);
        setOptions(genrateOptionsAndShuffle(data.results[0]))
        setIsLoading(false)
    };

    const genrateOptionsAndShuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }

    const handleSelectedOption = (_option, index) => {
        const isCorrect = _option === questions[ques].correct_answer;

        setCorrectness(prevCorrectness => {
            const newCorrectness = [...prevCorrectness];
            newCorrectness[index] = isCorrect;
            return newCorrectness;
        });

        if (isCorrect) {
            setScore(score + 10);
            setAns(ans + 1);
        } else {
            const correctIndex = options.findIndex(option => option === questions[ques].correct_answer);
            setCorrectness(prevCorrectness => {
                const newCorrectness = [...prevCorrectness];
                newCorrectness[correctIndex] = true;
                return newCorrectness;
            });
        }
        setTimeout(() => {
            if (ques < 9) {
                setQues(ques + 1);
                setOptions(genrateOptionsAndShuffle(questions[ques + 1]));
                setCorrectness(Array(4).fill(null));
            } else {
                handleShowResult();
            }
        }, 2000);
    };
    
    const handleShowResult = () => {
        navigation.navigate('Result', { score: score, ans: ans,catg :catg})
    }

    useEffect(() => {
        getQuiz();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <View style={{ justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator size={'large'} color={'#0000ff'} />
            </View> : questions && (
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question}>Q.{ques + 1} {decodeURIComponent(questions[ques].question)}</Text>
                    </View>
                    <View style={styles.option}>
                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.answerButton,
                                    correctness[index] ? styles.anscheck : null,
                                ]}
                                onPress={() => handleSelectedOption(option, index)}
                            >
                                <Text style={styles.answer}>{decodeURIComponent(option)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Main')}>
                            <Text style={styles.btntext}>GO Home</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default Quiz;


const styles = StyleSheet.create({
    anscheck:{
        backgroundColor:'#A1EEBD'
    },
    answer: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    answerButton: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginVertical: 6,
        padding: 12,
    },
    bottom: {
        
        marginBottom: 12,
        paddingVertical: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 30,
        padding: 12,
        paddingHorizontal: 16,
    },
    btntext: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
    },
    container: {
        backgroundColor:'black',
        height: '100%',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    option: {
        flex: 1,
        marginVertical: 26,
    },
    parent: {
        height: '100%',
        padding: 10,
    },
    question: {
        color: "white",
        fontSize: 28,
    },
    top: {
        marginVertical: 16,
    },
})