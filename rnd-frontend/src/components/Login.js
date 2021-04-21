import { Box, Center, Square, Stack, Grid, GridItem, Flex, Input, Button} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import {useState} from "react"


function Login ({setCurrentUser}) {

// ----------- Use States ----------- //
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      })

// ----------- Navigation to MainPage ----------- //

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    

    const handleLogin = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                return resp.json().then((data) => {
                throw data;
                });
            }
        })
        .then(userData => {
            setCurrentUser(userData.user)
            localStorage.setItem("token", userData.token)
            history.push("/choose_game")
        })
        .catch((data) => {
            setErrors(data.errors);
        });
    }

// ----------- DOM ----------- //  
    return (
        <Flex justifyContent="center" alignItems="center" height="100%" width="100%" marginTop="5em">
    <Box height="549px" width="966px" bg="gray" >
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <Stack spacing="24px" maxWidth="500px" marginTop="2em">
        <Input bg="teal" onChange={handleChange} type="text" placeholder="Username" name="username"/>
        <Input bg="teal" onChange={handleChange} type="password" placeholder="Password" name="password" />
        {/* {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))} */}
        <Button bg="blue" type="submit"> Login </Button>
        </Stack>
        </form>
    </Box>
    </Flex>
    )
}

export default Login