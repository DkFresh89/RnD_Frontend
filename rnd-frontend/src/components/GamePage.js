import Question from './Question'
import Answers from './Answers'
import {useState} from 'react'
import GameOver from './GameOver'
import { Box, Flex, Container, Spacer, Stack} from "@chakra-ui/react"



function GamePage ({questions, setPoints, points, handleGameOver, gameMatch, setGameMatch}) {

    // console.log(questions)
    
// ----------- Use States ----------- //
    const [round, setRound] = useState(0)
    const [finalAnswer, setFinalAnswer] = useState(false)
    
// ----------- get  ----------- //

const nextQuestion = () => {
    if (round <= questions.length){
        setRound(round => round + 1)
    }
    setFinalAnswer(false)
}
    
// ----------- Questions Map ----------- //
    const questionsArray = questions.map(q => {

        console.log(q["question"].replace(/&#039;/g, "'"))
        return (
            <Question key={q["question"]} query={q["question"].replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&eacute;/g, "é")} points={points}/>
        )
    })
        
    const answersArray = questions.map(q => {
        return (
            <Flex h="100%" w="100%">
                <Stack direction="row">
                    <Box>
            <Answers 
                key={q["id"]}
                incorrect_answers={q["incorrect_answers"]} 
                correct_answer={q["correct_answer"]} 
                setPoints={setPoints}
                points={points}
                nextQuestion={nextQuestion}
                finalAnswer={finalAnswer}
                setFinalAnswer={setFinalAnswer}
            /> 
                    </Box>
                </Stack>
            </Flex>
        )
    })

// ----------- DOM ----------- //   
    return (
    <Container flexDirection="column">
        {/* <h1>Game Page</h1> */}
        {questionsArray[round]} 
        {answersArray[round] ? answersArray[round] : handleGameOver()}
        {!answersArray[round] && <GameOver  points={points} questions={questions}/>}
        
    </Container>
    )

}

export default GamePage