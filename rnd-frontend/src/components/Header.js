import { Box, Center, Button, Grid, Image, Text} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import logo from './logo.png'


function Header ({currentUser, setCurrentUser, setPoints}) {
    
    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        setCurrentUser(null)
        history.push("/")
    }

    const handleNewGame = () => {
        setPoints(0)
        history.push("/choose_game")
    }



    console.log(currentUser)
// ----------- DOM ----------- //  
    return (
    <Grid  w="100%" bg="green" p={0} templateColumns="1fr 1fr 1fr" templateRows="110px 20%" justifyContent="center" >

        <Box textAlign="center" w="120px" borderRadius="md" bg="red" alignSelf="center" justifySelf="center">{currentUser ? <Text fontFamily="'Caveat', cursive" fontWeight="700">Welcome {currentUser["username"]}</Text> : "Create an account!"}</Box>

        <Center id="logo" h="100%"><Image boxSize="200px" src={logo} alt="R & D Trivia" /></Center>

        <Box textAlign="center" w="120px" borderRadius="md" bg="red" alignSelf="center" justifySelf="center">{currentUser ? <Text fontFamily="'Caveat', cursive" fontWeight="700"> High Score: {currentUser["high_score"]}</Text> : "Login!"}</Box>

        <Box width="100%" bg="green" gridColumnStart="1" gridColumnEnd="6" justifyItems="right" textAlign="right">
            {currentUser ? 
        <Button margin="1em" size="sm"  onClick={handleLogout} colorScheme="red" width="100px" justifySelf="right">Logout</Button> : null}
            </Box> 

        <Box width="100%" bg="green" gridColumnStart="1" gridColumnEnd="6" justifyItems="right" textAlign="right">
            {currentUser ? 
        <Button margin="1em" size="sm"  onClick={handleNewGame} colorScheme="red" width="120px" justifySelf="right">Play New Game</Button> : null}
            </Box> 
    </Grid>
    )
}

export default Header