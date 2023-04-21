import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


const Authenticate = props => {

    const [isLoginMode, setIsLoginMode] = useState(true)


    const handleAuthSubmission = event => {
        event.preventDefault()

        if(isLoginMode) {
            // do login stuff

        }
        else {
            // do signup stuff
            event.target.name.value = ""
        }

        event.target.email.value = ""
        event.target.password.value = ""

    }

    const handleLoginTypeSwitch = () => {
        if (!isLoginMode) {
            console.log('pressed')
            setIsLoginMode(true)
        }
        else {
            console.log('hey')
            setIsLoginMode(false)
        }
    }



    return ( 
    <div>
    
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
    </div>
    )
}

export default Authenticate;