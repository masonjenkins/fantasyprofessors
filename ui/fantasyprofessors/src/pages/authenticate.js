import React, { useState, useContext } from "react";
import { Box, CircularProgress, TextField, Button, Alert, AlertTitle } from '@mui/material'
import { AuthContext } from "../context/authenticationContext";
import API_URL from "../secrets";


const Authenticate = props => {

    const [isLoginMode, setIsLoginMode] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const auth = useContext(AuthContext)

    const handleAuthSubmission = async event => {
        event.preventDefault()
        setIsLoading(true)
        

        if(isLoginMode) {
            try {
                const response = await fetch(`${API_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: event.target.email.value,
                        password: event.target.password.value
                    })
                })

                const responseData = await response.json()
                if(!response.ok) {
                    throw new Error(responseData.message)
                } else {
                    event.target.email.value = ""
                    event.target.password.value = ""
                }

                auth.login(responseData.token, responseData.isAdmin)
            } catch (e) {
                setError(e.message || "Error authenticating user. Try again.")
            } finally {
                setIsLoading(false)
            }
        }
        else {
            try {
                const response = await fetch(`${API_URL}/users/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: event.target.email.value,
                        password: event.target.password.value,
                        name: event.target.name.value
                    })
                })

                const responseData = await response.json()
                if(!response.ok) {
                    throw new Error(responseData.message)
                } else {
                    event.target.email.value = ""
                    event.target.password.value = ""
                    event.target.name.value = ""
                }

                auth.login(responseData.token, responseData.isAdmin)
            } catch (e) {
                setError(e.message || "Error authenticating user. Try again.")
            } finally {
                setIsLoading(false)
            }            
        }
    }

    const handleLoginTypeSwitch = () => {
        if (!isLoginMode) {
            setIsLoginMode(true)
        }
        else {
            setIsLoginMode(false)
        }
    }



    return ( 
    <div>
        {error && <Alert severity="error"><AlertTitle>Error</AlertTitle>{error}</Alert>}
        <h2 style={{textAlign: "center"}}>{isLoginMode? "FantasyProfessors Account Login" : "Create your FantasyProfessors account"}</h2>

        <form onSubmit={handleAuthSubmission}>
            <Box sx={{width: window.innerWidth > 800 ? '50%' : '100%', margin: 'auto', mt: 1}}>
                {isLoginMode ? <></> : <TextField margin="normal" required id="name" label={"Full Name"} autoFocus type={"text"} fullWidth></TextField>}
                <TextField margin="normal" required id="email" label={"Email"} autoComplete="email" type={"email"} fullWidth></TextField>
                <TextField margin="normal" required id="password" label={"Password"} type={"password"} name="password" inputProps={{minLength: 8}} fullWidth></TextField>
                <Button type="submit"  variant="contained" fullWidth>{isLoginMode ? "Login" : "Signup"}</Button>
                <Button type="button"  onClick={handleLoginTypeSwitch} fullWidth>{isLoginMode ? "First-timer? SIGNUP" : "Have an account? LOGIN"}</Button>
            </Box>            
        </form>

        <h6 style={{textAlign: "center"}}>By {isLoginMode ? "logging in" : "creating an account"}, you agree to the site terms and conditions.</h6>
        {isLoading && <CircularProgress style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>}
    </div>
    )
}

export default Authenticate;