import { useState } from 'react'
import Axios from 'axios'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import LocationSearchBox from '../LocationTextBox/LocationSearchBox'
import Button from '@mui/material/Button'
import { validateData } from './ClientSideValidation'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [pricePerKM, setPricePerKM] = useState(0)
  const [bio, setBio] = useState('')
  const [displayName, setDisplayName] = useState('')

  const submitRegister = () => {
    Axios.post('http://localhost:3002/api/register', {
      username: username,
      password: password,
      firstName: accountType === 'Customer' ? firstName : null,
      lastName: accountType === 'Customer' ? lastName : null,
      displayName: accountType === 'Barber' ? displayName : null,
      pricePerKM: accountType === 'Barber' ? pricePerKM : null,
      bio: accountType === 'Barber' ? bio : null,
    }).then(() => {
      alert('success')
    })
  }

  const [accountType, setAccountType] = useState<string | null>(null)

  const submit = () => {
    //If data isn't valid, add all the client side errors
    if(validateData(username, password)){
      submitRegister()
    } else {
      //Add UI validation 
    }
  }

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
              setUsername(e.target.value)
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
              <TextField required id="outlined-required" 
              onChange={(e) => {
              setDisplayName(e.target.value)
            }}/>
              <br />
              <h5>Price per km</h5>
              <TextField required id="outlined-required"  type="number"
              onChange={(e) => {
                setPricePerKM(4)
              }}/>
              <h5>Bio</h5>
              <TextField required id="outlined-required" onChange={(e) => {
              setBio(e.target.value)
            }}/>
              <br />
            </div>
          ) : accountType === 'Customer' ? (
            <div>
              <h5>First Name</h5>
              <TextField required id="outlined-required" label="First Name" onChange={(e) => {
              setFirstName(e.target.value)
            }}/>
              <br />
              <h5>Last Name</h5>
              <TextField required id="outlined-required" label="Last Name" onChange={(e) => {
              setLastName(e.target.value)
            }}/>
              <br />
            </div>
          ) : null}
        </div>
        <Button variant="contained" disableElevation onClick={submit}>
          Submit
        </Button>
      </Box>
    </div>
  )
}

export default RegisterPage
