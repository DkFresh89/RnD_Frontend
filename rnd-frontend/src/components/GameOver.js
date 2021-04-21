import { Box, Button, Flex, Stack, Text} from "@chakra-ui/react"



function GameOver({points, questions}) {

    return(

        <Stack >
            <Box textAlign="center"><Text fontSize="2xl" fontFamily="'Grandstander', cursive" fontWeight="800">Game Over!</Text></Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Total Points: {points}</Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Number Of Questions: {questions.length}</Box>
            <Box fontFamily="'Grandstander', cursive" fontWeight="500">Round Category: {questions[0].category}</Box>
            <Box align="center"><Button fontFamily="'Grandstander', cursive" fontWeight="500" bg="#00cf0a" w="200px" textAlign="center">Choose Another Game</Button></Box>
        </Stack>
    )
}


export default GameOver