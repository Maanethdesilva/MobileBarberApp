import { useState, useEffect } from 'react'
import Maps from '../MapsAPI/Maps'
import Axios from 'axios'
import ClientCardGrid from '../ClientCardGrid/ClientCardGrid'
import { Container } from '@mui/system'
import { Box } from '@mui/material'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

function CustomerHomePage() {
  const [barberList, setBarberList] = useState([])
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    Axios.get('http://localhost:3002/api/getServiceProviders').then(
      (response) => {
        setBarberList(response.data)
      }
    )
  }, [])

  console.log('barber side', barberList)

  return (
    <div className="CustomerHomePage">
      <Box
        sx={{
          padding: '30px',
          backgroundColor: '#00003f',
        }}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Barbers"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>

      <Container
        sx={{
          padding: '30px',
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setLayout(0)}>Grid</Button>
          <Button onClick={() => setLayout(1)}>Map</Button>
        </ButtonGroup>


        { layout == 0 ? <ClientCardGrid barbers={barberList} /> : <Maps barbers={barberList}/>}
      </Container>
    </div>
  )
}

export default CustomerHomePage
