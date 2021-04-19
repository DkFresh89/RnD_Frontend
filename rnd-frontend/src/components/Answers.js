
function Answers ({incorrect_answers, correct_answer}) {




    
// ----------- DOM ----------- //  
    return (
    <div className="answers">
        <h1>Answers</h1>
        <p>{incorrect_answers}</p>
        <p>{correct_answer}</p>
    </div>
    )
}

export default Answers