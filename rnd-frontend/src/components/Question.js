import { Box, Flex, Container, Spacer, Stack} from "@chakra-ui/react"

function Question ({query, points}) {




    
// ----------- DOM ----------- //  
    return (
    <Container centerContent>
        <Box><h1>Question:</h1></Box>
        <Box h="5"></Box>
        <Spacer />
        <Stack >
        <Box>{query}</Box>
        <Box><h3>Points: {points}</h3></Box>
        </Stack>
        <Box h="3"></Box>
        <Spacer />
    </Container>
    )
}

export default Question