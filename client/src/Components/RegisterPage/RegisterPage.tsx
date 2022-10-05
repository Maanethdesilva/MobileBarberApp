import { useState } from 'react'
import Axios from 'axios'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import LocationSearchBox from '../LocationTextBox/LocationSearchBox'
import Button from '@mui/material/Button'
import { validateUsername, validatePassword } from './ClientSideValidation'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const validateData = () => {
    let valid = true
    //Add validation here and then submit
    validateUsername(username) ? alert('valid username'): alert('invalid username')
    validatePassword(username) ? alert('valid password'): alert('invalid password')
  }

  const submitRegister = () => {
    Axios.post('http://localhost:3002/api/register', {
      username: username,
      password: password,
    }).then(() => {
      alert('success')
    })
  }

  const [accountType, setAccountType] = useState<string | null>(null)

  const handleAccountTypeSwitch = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAccountType(newAlignment)
  }

  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '20px',
      }}
    >
      <h1> Register </h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '100%' },
          textAlign: 'left',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h5>Email</h5>
          <TextField required id="outlined-required" label="Email" onChange={(e) => {
              setPassword(e.target.value)
            }} />
          <br />
          <h5>Location</h5>
          <LocationSearchBox />
          <h5>Password</h5>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <br />
          <h5>Confirm Password</h5>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <ToggleButtonGroup
          value={accountType}
          exclusive
          onChange={handleAccountTypeSwitch}
          aria-label="text alignment"
        >
          <ToggleButton value="Customer" aria-label="centered">
            Customer
          </ToggleButton>
          <ToggleButton value="Barber" aria-label="centered">
            Barber
          </ToggleButton>
        </ToggleButtonGroup>

        <div
          style={{
            paddingTop: '20px',
          }}
        >
          {accountType === 'Barber' ? (
            <div>
              <h5>Barbershop Name</h5>
              <TextField required id="outlined-required" />
              <br />
              <h5>Price per km</h5>
              <TextField required id="outlined-required" />
              <h5>Bio</h5>
              <TextField required id="outlined-required" />
              <br />
            </div>
          ) : accountType === 'Customer' ? (
            <div>
              <h5>First Name</h5>
              <TextField required id="outlined-required" label="First Name" />
              <br />
              <h5>Last Name</h5>
              <TextField required id="outlined-required" label="Last Name" />
              <br />
            </div>
          ) : null}
        </div>
        <Button variant="contained" disableElevation onClick={validateData}>
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default RegisterPage
