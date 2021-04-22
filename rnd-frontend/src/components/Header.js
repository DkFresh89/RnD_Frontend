import { Box, Center, Button, Grid, Image} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import logo from './logo.png'


function Header ({currentUser, setCurrentUser}) {
    
    const history = useHistory()

    const handleLogout = () => {
        localStorage.clear()
        setCurrentUser(null)
        history.push("/")
    }


    console.log(currentUser)
// ----------- DOM ----------- //  
    return (
    <Grid  w="100%" bg="green" p={0} templateColumns="1fr 1fr 1fr" templateRows="110px 20%" justifyContent="center" >
        <Box bg="red" alignSelf="center" justifySelf="center">{currentUser ? currentUser["username"] : "Create an account!"}</Box>
        <Center id="logo" h="100%"><Image boxSize="200px" src={logo} alt="R & D Trivia" /></Center>
        <Box bg="red" alignSelf="center" justifySelf="center">{currentUser ? `High Score: ${currentUser["high_score"]}` : "Login!"}</Box>
        <Box width="100%" bg="green" gridColumnStart="1" gridColumnEnd="6" justifyItems="right" textAlign="right">
            {currentUser ? 
        <Button  onClick={handleLogout} colorScheme="red" width="150px" justifySelf="right">Logout</Button> : null}
            </Box> 
    </Grid>
    )
}

export default Header