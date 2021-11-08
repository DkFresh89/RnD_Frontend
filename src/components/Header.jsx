import { Box, Center, Button, Image, Text, Flex, useColorMode} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import logo from './logo.png'


function Header ({currentUser, setCurrentUser, setPoints}) {
    
    const history = useHistory()
    const { colorMode, toggleColorMode } = useColorMode()

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
    <Flex bg="green" maxH='25em'  >
        <Box>
            <Button margin='4' padding='2' onClick={toggleColorMode}>
                Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </Box>

        <Box  width="100%" bg="green" textAlign="center" >
            {currentUser ? 
            <Button margin="1em" size="sm"  onClick={handleNewGame} colorScheme="purple" width="120px" >Play New Game</Button> : null}
        </Box> 

        { currentUser && <Box textAlign="center" w="120px" h="30" borderRadius="md" bg="red" >
            {currentUser ? <Text fontSize="xl" fontFamily="'Caveat', cursive" fontWeight="700">Welcome {currentUser["username"]}!</Text> : null}
        </Box>}

        <Center marginLeft='-130' id="logo" >
            <Image fit="contain" boxSize='fit-content' src={logo} alt="R & D Trivia" />
        </Center>

       { currentUser && <Box textAlign="center" w="120px" h="30" borderRadius="md" bg="red">
            {currentUser ? <Text fontSize="xl" fontFamily="'Caveat', cursive" fontWeight="700"> High Score: {currentUser["high_score"]}</Text> : null}
        </Box>}

        <Box  width="100%" bg="green"  textAlign="center">
            {currentUser ? 
            <Button margin="1em" size="sm"  onClick={handleLogout} colorScheme="red" width="100px" >Logout</Button> : null}
        </Box> 

    </Flex>
    )
}

export default Header