import GamePage from './GamePage'
import User from './User'
import { Box, Center, Button, Grid, Container, Flex} from "@chakra-ui/react"

function MainPage ({questions, setPoints, points, handleGameOver, currentUser}) {


    
// ----------- DOM ----------- //  
    return (
        <Container marginTop="5em">
    <Flex bg="pink" w="100%" h="100%" padding="2em" >
        <h1>Main Page</h1>
        <GamePage 
            questions={questions} 
            setPoints={setPoints} 
            points={points}
            handleGameOver={handleGameOver}
        />
        <User currentUser={currentUser} />
    </Flex>
    </Container>
    )
}

export default MainPage