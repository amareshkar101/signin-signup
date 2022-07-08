import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@material-ui/core"
import LockIcon from '@mui/icons-material/Lock';

function Login({handleChange}) {

    const paperStyle = { padding: "19px 20px", height: '85vh', margin: "0 auto" }
    const avatarStyle = { backgroundColor: "#3F51B5" }
    const marginBtw={margin:"5px auto"}

    return (
        <Grid>
            <Paper  style={paperStyle} >
                <Grid align="center">
                    <Avatar style={avatarStyle} ><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form>
                <TextField id="outlined-basic userId" variant="outlined" label='UserId' placeholder='Enter UserId' style={marginBtw} fullWidth required />
                {/* &nbsp; */}
                <TextField id="outlined-basic" variant="outlined" label='Password' placeholder='Enter Password' style={marginBtw} type='password' fullWidth required />
                {/* &nbsp; */}
                <Button type='submit' variant='contained' style={marginBtw} fullWidth color='primary'>
                    Sign In
                </Button>
                {/* &nbsp; */}
                <Typography style={marginBtw} > Not a member?
                    <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign up
                    </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login
