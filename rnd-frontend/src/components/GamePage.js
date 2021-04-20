import Question from './Question'
import Answers from './Answers'
import {useState} from 'react'


function GamePage ({questions}) {

    // console.log(questions)
    
// ----------- Use States ----------- //
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [round, setRound] = useState(0)
    const [questionsPerRound] = useState(1)
    
// ----------- get  ----------- //

const nextQuestion = () => {
    if (round <= questions.length){
        setRound(round => round + 1)
    } else {window.alert("Game Over")}
}
    
// ----------- Questions Map ----------- //
    const questionsArray = questions.map(q => {
        
        console.log(q["question"].replace(/&#039;/g, "'"))
        return (
            <Question query={q["question"].replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å")}  nextQuestion={nextQuestion}/>
            )
    })
        
    const answersArray = questions.map(q => {
        return (
            <Answers incorrect_answers={q["incorrect_answers"]} 
            
            
            correct_answer={q["correct_answer"]} />
        )
    })

// ----------- DOM ----------- //  
    return (
    <div className="gamePage">
        <h1>Game Page</h1>
        {questionsArray[round]}
        {answersArray[round]}
        
    </div>
    )

}

export default GamePage