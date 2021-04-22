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

    const userWinRatio = winRatio.map((user) => (
        
        <ListItem key={user.user["id"]}>{user.user["username"]} Correct Ratio of {user["correct_answer_ratio"]}%</ListItem>
        
    ))
    // console.log(winRatio[0])
    // console.log(winRatio[0].correct_answer_ratio)
    // console.log(winRatio[0].user["id"])
// ----------- DOM ----------- //  
    return (
    <Flex margin="1" padding="1" align="center" w="100%" h="100%" borderRadius="md">
        <VStack align="center">
        <Box><Text fontFamily="'Grandstander', cursive" fontWeight="700">Top-Ranked-Players:</Text></Box>
        <Box h="2" />
        <Spacer />
        <OrderedList>
            <Text>{fiveList}</Text>
        </OrderedList>
        </VStack>
        {/* <VStack align="center">
        <Box><Text fontFamily="'Grandstander', cursive" fontWeight="700">Right Answer %:</Text></Box>
        <Box h="2" />
        <Spacer />
        <OrderedList>
            <Text>{userWinRatio}</Text>
        </OrderedList>
        </VStack> */}
    </Flex>
    )
}

export default User