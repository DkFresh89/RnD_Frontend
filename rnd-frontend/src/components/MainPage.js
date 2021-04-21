import GamePage from './GamePage'
import User from './User'
import { Box, Center, Button, Grid, Container, Flex} from "@chakra-ui/react"

function MainPage ({questions, setPoints, points, handleGameOver, currentUser}) {


    
// ----------- DOM ----------- //  
    return (
        <Container>
    <Flex bg="pink" w="100%" h="100%" >
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