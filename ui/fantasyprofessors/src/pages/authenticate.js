import React from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


const Authenticate = props => {
    return ( 
    <div>
    
        <h2>Auth</h2>

        <Box component={"form"}>
            <TextField required fullWidth label={"Email"} autoFocus autoComplete="email"></TextField>
            <TextField required fullWidth label={"Password"} type={"password"} name="password" ></TextField>
            <Button type="submit" fullWidth variant="contained">Login</Button>
        </Box>
    </div>
    )
}

export default Authenticate;