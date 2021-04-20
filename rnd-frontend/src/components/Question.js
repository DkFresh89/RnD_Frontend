
function Question ({query, points}) {




    
// ----------- DOM ----------- //  
    return (
    <div className="question">
        <h1>Question</h1>
        <h3>Points: {points}</h3><br/><br/>
        <p>{query}</p>
    </div>
    )
}

export default Question