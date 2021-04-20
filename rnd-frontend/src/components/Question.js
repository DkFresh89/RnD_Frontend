
function Question ({query, nextQuestion}) {




    
// ----------- DOM ----------- //  
    return (
    <div className="question">
        <h1>Question</h1>
        <p>{query}</p>
        <button onClick={nextQuestion} >Next Question</button>
    </div>
    )
}

export default Question