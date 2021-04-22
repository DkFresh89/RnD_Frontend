import GamePage from './GamePage'
import User from './User'
import { Box, Center, Button, Grid, Container, Flex} from "@chakra-ui/react"

function MainPage ({questions, setPoints, points, handleGameOver, currentUser, setCurrentUser}) {


    
// ----------- DOM ----------- //  
    return (
        <Container align="center" marginTop="5em">
    <Flex bg="pink" w="100%" h="100%" padding="2em" borderRadius="md">
        {/* <h1>Main Page</h1> */}
        <Box bg="cyan"><User currentUser={currentUser} /></Box>
        <Box><GamePage 
            questions={questions} 
            setPoints={setPoints} 
            points={points}
            handleGameOver={handleGameOver}
            setCurrentUser={setCurrentUser}
        /></Box>
      
    </Flex>
    </Container>
    )
}

export default MainPage