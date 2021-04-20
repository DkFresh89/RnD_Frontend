import GamePage from './GamePage'
import User from './User'

function MainPage ({questions, setPoints, points}) {


    
// ----------- DOM ----------- //  
    return (
    <div className="mainPage">
        <h1>Main Page</h1>
        <GamePage questions={questions} setPoints={setPoints} points={points}/>
        <User />
    </div>
    )
}

export default MainPage