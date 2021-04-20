function GameOver({points, questions}) {

    return(

        <div className="gameOver">
            <h1>Game Over!</h1><br/><br/>
            <h2>Total Points: {points}</h2><br/><br/>
            <h3>Number Of Questions: {questions.length}</h3><br/><br/>
            <h4>Round Category: {questions[0].category}</h4>
        </div>
    )
}


export default GameOver