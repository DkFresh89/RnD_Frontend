import GamePage from './GamePage'
import User from './User'

function MainPage ({questions}) {


    
// ----------- DOM ----------- //  
    return (
    <div className="mainPage">
        <h1>Main Page</h1>
        <GamePage questions={questions}/>
        <User />
    </div>
    )
}

export default MainPage