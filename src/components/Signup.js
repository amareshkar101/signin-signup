import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link,MenuItem,Box  } from "@material-ui/core"
import AddCircleIcon from '@mui/icons-material/AddCircle';


function Signup({handleChange}) {

  const paperStyle = { padding: "3px 20px", width: 300, margin: "0 auto" }
  const avatarStyle = { backgroundColor: "#3F51B5" }
  const marginBtw={margin:"5px auto"}
  // const accent = purple['A200']

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: purple[500],
  //     },
  //     secondary: {
  //       main: '#f44336',
  //     },
  //   },
  // });

  const linkStyle={color:"#3F51B5"}

  const user=[
    {
      value:'Customer',
      label:'CUSTOMER'
    },
    {
      value:'Engineer',
      label:'ENGINEER'
    }
  ]

  const [usertype, setUserType] = React.useState('ENGINEER');

  const handleChanges = (event) => {
    setUserType(event.target.value);
  };

  // const selectStyle={padding:"30px 0"}

  // const headerStyle = {margin:0}
  return (
    <Grid>
      <Paper style={paperStyle} >
        <Grid align="center">
          <Avatar style={avatarStyle} ><AddCircleIcon /></Avatar>
          <h2 >Sign Up</h2>
          {/* <Typography type='caption'>
            Please fill this field form to create an account
          </Typography> */}
        </Grid>
        <form>
          <TextField id="outlined-basic" variant="outlined" label='Name' placeholder='Enter Name' style={marginBtw} fullWidth required />
          {/* &nbsp; */}
          <TextField id="outlined-basic" variant="outlined" label='UserId' placeholder='Enter UserId' style={marginBtw} fullWidth required />
          {/* &nbsp; */}
          <TextField id="outlined-basic" variant="outlined" label='Email' placeholder='Enter Email' style={marginBtw} fullWidth required />
          {/* &nbsp; */}
          <TextField id="outlined-basic" variant="outlined" label='Password' placeholder='Enter Password' style={marginBtw} type='password' fullWidth required />
          {/* &nbsp; */}

          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
          id="outlined-select-usertype-native"
          select
          label="User Type"
          value={usertype}
          onChange={handleChanges}
          helperText="Please select your user type"
          variant="outlined"
          style={marginBtw}
          fullWidth
          required
        >
          
          {user.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</Box>
        {/* &nbsp; */}
          <Button type='submit' variant='contained' style={{margin:"5px auto"}} fullWidth color="primary">
            Sign Up
          </Button>
          {/* &nbsp; */}
          <Typography  style={marginBtw} > Already a member?
            <Link href="#" style={linkStyle} onClick={()=>handleChange("event",0)} >
              Sign In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  )
}

export default Signup
