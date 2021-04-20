import {useState} from "react"
import { useHistory } from "react-router-dom"



function ChooseGame ({setQuestions}) {

// ----------- Use States ----------- //

    const [difficulty, setDifficulty] = useState("easy")
    const [numberQuestions, setNumberQuestions] = useState("10")
    const [category, setCategory] = useState("9")

// ----------- Form Callbacks ----------- //
    const handleDifficulty = (e) => setDifficulty(e.target.value)
    const handleNumberQuestions = (e) => setNumberQuestions(e.target.value)
    const handleCategory = (e) => setCategory(e.target.value)

    //--------------History Callback----------//

    const history = useHistory()

// ----------- Fetch ----------- //
    // const tempUrl = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${category}&difficulty=${difficulty}`

    
    const handleFetch = (e) => {
        e.preventDefault()
        const chosenGame = {
            difficulty: difficulty,
            num_of_questions: numberQuestions,
            category: category
        }
        
        fetch("http://localhost:3000/questions/choose_game", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(chosenGame)
        })
        .then(resp => resp.json())
        .then(questionsArray => {
            setQuestions(questionsArray)
            history.push("/main_page")    
        })
        // TODO add fetch to backend the tempUrl above works dynamically as GET from the Open Trivia DB
    }
    // console.log(questionsArray)

// ----------- DOM ----------- //  
    return (
        <div className="chooseGame">
            <h1>Choose Game</h1>
            <form onSubmit={handleFetch}>
                
                <select onChange={handleDifficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>  
                </select>
                <input onChange={handleNumberQuestions} type="number" defaultValue="10" min="1" max="50" />
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
                <input type="submit" value="Play Game" />
            </form>
        </div>
    )
}
    
    export default ChooseGame