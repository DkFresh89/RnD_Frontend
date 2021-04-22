import { chakra, Grid, Box, Flex, GridItem, Text, Tooltip, Spacer } from "@chakra-ui/react"

function Answers ({incorrect_answers, correct_answer, setPoints, points, nextQuestion, finalAnswer, setFinalAnswer}) {

    const Button = chakra("button", {
        baseStyle: {
            px: "3",
  py: "2",
  bg: "green.200",
  rounded: "md"
        },
      })
    
   console.log(points);

        //switch statement for 
    const checkAnswer = (e) => {
        // debugger
        if (e.target.innerText === correct_answer){
            setPoints(points => points + 10)

        }
        setFinalAnswer(true)
    }
    console.log(points);

    const answers = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5).map(answers =>{
        return <li key={answers} correct_answer={{correct_answer}, "hidden" } onClick={!finalAnswer ? checkAnswer : null}  >{answers.replace(/&#039;/g, "'").replace(/&quot;/g, `"`).replace(/&ldquo;/g, `"`).replace(/&rsquo;/g, "'").replace(/&rdquo;/g, `"`).replace(/&shy;/g, "-").replace(/&hellip;/g, "...").replace(/&Aring;/g, "Å").replace(/&oacute;/g, "ó")}</li>
    })
    
// ----------- DOM ----------- //  
    return (
        <Box>
        <Text>{finalAnswer ? `The correct answer is: ${correct_answer}` : "Answers:"}</Text>
        <Box h="3"></Box>
        <Spacer/>
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)"
  gap={4}>
        
        <GridItem w="200px" rowSpan={1} colSpan={1}>{!finalAnswer ? <Text>{answers[0]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[0]}</Text></Tooltip>}</GridItem>
        <GridItem w="200px" rowSpan={1} colSpan={4}>{!finalAnswer ? <Text>{answers[1]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[1]}</Text></Tooltip>}</GridItem>
        <GridItem w="200px" rowSpan={1} colSpan={1}>{!finalAnswer ? <Text>{answers[2]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[2]}</Text></Tooltip>}</GridItem>
        <GridItem w="200px" rowSpan={1} colSpan={3}>{!finalAnswer ? <Text>{answers[3]}</Text> : <Tooltip label="You've Already Answered!"><Text opacity="0.2">{answers[3]}</Text ></Tooltip> }</GridItem>
       
    </Grid>
        <Box align="center"><Button onClick={nextQuestion} >Next Question</Button></Box>
    </Box>
    )
}

export default Answers