import {useState} from 'react'

function Answers ({incorrect_answers, correct_answer, setPoints, points, nextQuestion, finalAnswer, setFinalAnswer}) {
    
   console.log(points);

  
    const checkAnswer = (e) => {
        // debugger
        if (e.target.innerText === correct_answer){
            setPoints(points => points + 10)

        }
        setFinalAnswer(true)
    }
    console.log(points);

    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5).map(answers =>{
       return <li correct_answer={{correct_answer},"hidden" } onClick={!finalAnswer ? checkAnswer : null}  >{answers.replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&oacute;s/g, "ó")}</li>
    })
    // debugger
// ----------- DOM ----------- //  
    console.log(answers)
    return (
    <div className="answers">
        <h1>Answers</h1>
        <ul>{answers}</ul>
        <button onClick={nextQuestion} >Next Question</button>
    </div>
    )
}

export default Answers