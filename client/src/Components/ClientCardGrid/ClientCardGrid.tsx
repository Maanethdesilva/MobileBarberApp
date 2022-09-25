import { useState, useEffect } from 'react'
import ClientCard from '../ClientCard/ClientCard'
import { Grid } from '@mui/material'

function ClientCardGrid({barbers}: any) {
  const [gridSpacing, setGridSpacing] = useState(3)

  return (
    <div className="ClientCardGrid">
      <Grid container spacing={0}>
        {
          barbers.map((barber: any) => 
              <Grid item xs={gridSpacing} sx={{
                padding: '10px',
              }}>
                <ClientCard barber={barber}/>
              </Grid>
          )
        }
      </Grid>
    </div>
  )
}

export default ClientCardGrid
