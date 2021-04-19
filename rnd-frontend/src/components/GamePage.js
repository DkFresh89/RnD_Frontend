import Question from './Question'
import Answers from './Answers'
import {useState} from 'react'

function GamePage ({questions}) {

    console.log(questions)
    
// ----------- Use States ----------- //
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [round, setRound] = useState(0)

    
    
// ----------- Questions Map ----------- //
    const questionsArray = questions.map(q => {
        return (
            <Question query={q["question"]} />
        )
    })
        
    const answersArray = questions.map(q => {
        return (
            <Answers incorrect_answers={q["incorrect_answers"]} correct_answer={q["correct_answer"]} />
        )
    })

// ----------- DOM ----------- //  
    return (
    <div className="gamePage">
        <h1>Game Page</h1>
        {questionsArray}
        {answersArray}
    </div>
    )

}

export default GamePage