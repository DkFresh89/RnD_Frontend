import MainPage from './MainPage'
import {useEffect, useState} from "react"


function ChooseGame () {

// ----------- Use States ----------- //

    const [difficulty, setDifficulty] = useState("")
    const [questionNumber, setDifficulty] = useState("")
    const [category, setCategory] = useState("")

// ----------- Form Callbacks ----------- //
    const handleCategory = (e) => console.log(e.target.value)

    
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
                <select onChange={handleCategory}>
                    <option value={9}>General Knowledge</option>
                    <option value={27}>Animals</option>
                    <option value={25}>Art</option>
                    <option value={26}>Celebrities</option>
                    <option value={10}>Entertainment: Books</option>
                    <option value={16}>Entertainment: Board Games</option>
                    <option value={32}>Entertainment: Cartoon & Animations</option>
                    <option value={29}>Entertainment: Comics</option>
                    <option value={11}>Entertainment: Film</option>
                    <option value={31}>Entertainment: Japanese Anime & Manga</option>
                    <option value={12}>Entertainment: Music</option>
                    <option value={13}>Entertainment: Musicals & Theatres</option>
                    <option value={14}>Entertainment: Television</option>
                    <option value={15}>Entertainment: Video Games</option>
                    <option value={22}>Geography</option>
                    <option value={23}>History</option>
                    <option value={20}>Mythology</option>
                    <option value={24}>Politics</option>
                    <option value={17}>Science & Nature</option>
                    <option value={18}>Science: Computers</option>
                    <option value={30}>Science: Gadgets</option>
                    <option value={19}>Science: Mathematics</option>
                    <option value={21}>Sports</option>
                    <option value={28}>Vehicles</option>
                </select>
            </div>
        )
    }
    
    export default ChooseGame