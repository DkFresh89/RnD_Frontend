import { Box, Flex, Container, Spacer, Stack} from "@chakra-ui/react"

function Question ({query, points}) {




    
// ----------- DOM ----------- //  
    return (
    <Container >
        <Stack direction="row">
        <Box><h1>Question:</h1></Box>
        <Spacer />
        <Box><h3>Points: {points}</h3></Box>
        <Box>{query}</Box>
        </Stack>
    </Container>
    )
}

export default Question