import React from 'react'
import { baseUrl } from '../utils/paths';
import { Button, Flex, Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import ResultComponent from './ResultComponent';
import { Navigate } from 'react-router-dom';
import { paths } from '../utils/paths';

export default function QuestionComponent( {category} ) {
  const [questionData, setQuestionData] = React.useState({});
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [answers, setAnswers] = React.useState([])
  const [showResult, setShowResult] = React.useState(false)
  const [result, setResult] = React.useState(null)
  const [startTime, setStartTime] = React.useState(0)

  React.useEffect(() => {
    setShowResult(false);
    setResult({})
    setQuestionData({})
    setStartTime(Date.now())
    const fetchQuestion = async () => {
      try {
        const authStr = localStorage.getItem('authorization');
        const response = await fetch(baseUrl + '/test?cat='+category, {
          method: 'GET',
          headers: {
            Authorization: authStr,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setQuestionData(responseData);
        } else {
          
          
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, [category]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const sendAnswers = async () => {
    answers.push(selectedAnswer);
    const response = await fetch(baseUrl+'/result?cat='+category, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "answers": answers
      }),
    });

    if (response.ok) {
        const data = await response.json();
        setResult(data);
        console.log(data);
        setQuestionData(null);
        setShowResult(true);

    } else {
      console.error('Get results failed:', response.statusText);
    }
  }

  const handleSubmit = () => {
    setAnswers([
      ...answers,
      selectedAnswer
    ])
    
    if (questionNumber + 1 === questionData.questions.length) {
        setSelectedAnswer("")
        sendAnswers();
        return;
    }
    console.log(answers);
    setSelectedAnswer("")
    console.log('Selected answer:', selectedAnswer);
    setQuestionNumber(questionNumber+1);
  };

  return (
    <>
      {questionData && questionData.questions && questionData.questions[0].task ? (
        <Stack spacing={6} textAlign="left">
          <Heading as="h2" fontSize="48px">
            {category}
          </Heading>
          <Text fontSize="20px">
            Pytanie {questionNumber+1} z {questionData.questions.length}
          </Text>
          <Text fontSize="20px">
            {questionData.questions[questionNumber].task}
          </Text>
          <Text />
          <RadioGroup value={selectedAnswer} onChange={handleAnswerSelection}>
            <Stack direction="column" spacing={4} align="left">
              {questionData.questions[questionNumber].answers.map((answer, index) => (
                <Flex backgroundColor="lightgray" h="5vh">
                  <Radio key={index} value={answer} w="100%" padding="1" marginLeft="10px" fontSize="160px">
                    {answer}
                  </Radio>
                </Flex>
              ))}
            </Stack>
          </RadioGroup>
          <Flex>
            <Button  onClick={handleSubmit} 
              background= '#ff416c'
              background= '-webkit-linear-gradient(to right, #ff4b2b, #ff416c)'
              background= 'linear-gradient(to right, #ff4b2b, #ff416c)'
              textColor= 'white'
              _hover={{ textDecor: 'none',  background: '#d13e60',
                background: '-webkit-linear-gradient(to right, #d13600, #d13e60)',
                background: 'linear-gradient(to right, #d13600, #d13e60)', 
              }} >
              { questionNumber + 1 === questionData.questions.length ? "Zakończ" : "Następne pytanie"}
            </Button>
          </Flex>
          
        </Stack>
      ) : showResult && result && result.score ? (
        <ResultComponent category={category} result={result} time={startTime} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
