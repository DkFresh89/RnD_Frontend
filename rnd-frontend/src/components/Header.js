import { Box, Center, Square, Circle, Grid, GridItem, Image} from "@chakra-ui/react"
import logo from './logo.png'


function Header () {




    
// ----------- DOM ----------- //  
    return (
    <Grid  w="100%" bg="green" p={0} templateColumns="1fr 1fr 1fr" justifyContent="center" >
        <Box bg="red" alignSelf="center" justifySelf="center">Username</Box>
        <Center id="logo" h="100%"><Image boxSize="200px" src={logo} alt="R & D Trivia" /></Center>
        <Box bg="red" alignSelf="center" justifySelf="center">High Score</Box>
    </Grid>
    )
}

export default Header