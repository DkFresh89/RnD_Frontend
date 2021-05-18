import { Box, Center, Button, Grid, Image, Text, GridItem} from "@chakra-ui/react"
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
        <Flex bg="green" >

       
        {/* <Box  width="100%" bg="green" textAlign="center" > */}
            {currentUser ? 
            <Button margin="1em" size="sm"  onClick={handleNewGame} colorScheme="purple" width="120px" >Play New Game</Button> : null}
        {/* </Box>  */}

        {/* <Box textAlign="center" w="120px" h="30" borderRadius="md" bg="red" > */}
            {currentUser ? <Text fontSize="xl" fontFamily="'Caveat', cursive" fontWeight="700">Welcome {currentUser["username"]}!</Text> : "Create an account!"}
        {/* </Box> */}
      

        <Center max w="100%" id="logo" h="100%">
            <Image fit="contain" boxSize="max-content" src={logo} alt="R & D Trivia" />
        </Center>

        <Box textAlign="center" w="120px" h="30" borderRadius="md" bg="red">
            {currentUser ? <Text fontSize="xl" fontFamily="'Caveat', cursive" fontWeight="700"> High Score: {currentUser["high_score"]}</Text> : "Login!"}
        </Box>

        <Box  width="100%" bg="green"  textAlign="center">
            {currentUser ? 
            <Button margin="1em" size="sm"  onClick={handleLogout} colorScheme="red" width="100px" >Logout</Button> : null}
        </Box> 

    </Flex>
    )
}

export default Header