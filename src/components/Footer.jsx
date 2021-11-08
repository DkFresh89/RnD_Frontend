import { Flex, HStack, Link, Divider, Center, Text, Heading, VStack, Box, Stack } from "@chakra-ui/react"

import { FaDev, FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Footer () {


    return(
        <Center
        flexDir='column'
        position='fixed'
        bottom='0'
        marginBottom='3'
        >
            <Heading size='md'>Built & Designed by:</Heading>
            <HStack margin='1'>

            <Text color='blue'>Doug Kerzner</Text>
            <Text color='purple'>&</Text>
                <Text color='green'>Richard Adule</Text>
            </HStack>
            <Stack direction='row' >

            <Stack color='blue' direction='row' spacing='1em'>
                <Link href='https://dev.to/dkfresh89' isExternal>
                <FaDev size='2em' />
                </Link>
                <Link href='https://github.com/DkFresh89' isExternal>
                <FaGithubSquare size='2em' />
                </Link>
                <Link href='https://linkedin.com/in/doug-kerzner' isExternal>
                <FaLinkedin size='2em' />
                </Link>

            </Stack>
            <Divider  orientation='vertical' height='25px' />
                <Stack color='green' direction='row' spacing='1em'>
                    

                <Link href='https://dev.to/dkfresh89' isExternal>
                <FaTwitter size='2em' />
                </Link>
                <Link href='https://github.com/BigRichi' isExternal>
                <FaGithubSquare size='2em' />
                </Link>
                <Link href='https://www.linkedin.com/in/richard-adule/' isExternal>
                <FaLinkedin size='2em' />
                </Link>
                </Stack>

            </Stack>
            {/* <Flex justifyContent='center'>
            <Link pb="10px" color='blue.500' href="mailto:me@dougkerzner.dev">
                me@dougkerzner.dev
            </Link>
            </Flex> */}
            </Center>
            // </Box>
    )
}