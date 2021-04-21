import { Box, Flex, Container, Spacer, Stack} from "@chakra-ui/react"

function Question ({query, points}) {




    
// ----------- DOM ----------- //  
    return (
    <Container centerContent>
        <Box><h1>Question:</h1></Box>
        <Stack >
        <Box>{query}</Box>
        <Box><h3>Points: {points}</h3></Box>
        </Stack>
    </Container>
    )
}

export default Question