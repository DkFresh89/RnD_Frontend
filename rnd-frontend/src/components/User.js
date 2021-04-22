import {useState, useEffect} from "react"
import { Box, Circle, Button, Stack, ListItem, OrderedList, Flex, Text, Spacer, VStack} from "@chakra-ui/react"

function User ({currentUser}) {

    const [topFiveUsers, setTopFiveUsers] = useState([])
    const [winRatio, setWinRatio] = useState([])

    useEffect(() => {
    fetch("http://localhost:3000/users/top_five")
    .then(res => res.json())
    .then(userStats =>{
        setTopFiveUsers(userStats["top_five_users"])
        setWinRatio(userStats["users_win_ratio"])
    })
    }, [])
    const fiveList = topFiveUsers.map((user) => (
        // console.log(user["username"])
        
        <ListItem key={user["id"]}>{user["username"]}</ListItem>
        
    ))
    // console.log(winRatio[0])
    // console.log(winRatio[0].correct_answer_ratio)
    // console.log(winRatio[0].user)
// ----------- DOM ----------- //  
    return (
    <Flex align="center" w="75px" borderRadius="lg">
        <VStack align="center">
        <Box><Text>User</Text></Box>
        <Box h="2" />
        <Spacer />
        <OrderedList>
            <Text>{fiveList}</Text>
        </OrderedList>
        </VStack>
    </Flex>
    )
}

export default User