import MainPage from './MainPage'


function ChooseGame () {




    
    // ----------- DOM ----------- //  
        return (
            <div className="chooseGame">
                <h1>Choose Game</h1>
                <checkbox />
                <select>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>  
                </select>
                <input type="number" min="10" max="50" placeholder="# of Questions (10-50)"/>
                <select>
                    <option value="sports">Sports</option>
                    <option value="films">Movies</option>
                    <option value="general">General Knowledge</option>
                </select>
            </div>
        )
    }
    
    export default ChooseGame