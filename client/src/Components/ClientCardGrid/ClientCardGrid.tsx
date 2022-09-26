import { useState, useEffect } from 'react'
import ClientCard from '../ClientCard/ClientCard'
import { Grid } from '@mui/material'

function ClientCardGrid(Props: any) {
  const [gridSpacing, setGridSpacing] = useState(Props.maps ? 6: 3)

  return (
    <div className="ClientCardGrid">
      <Grid container sx={{
                width: Props.maps ? '100%': '100%',
                height: '650px',
                overflow: 'scroll',
              }}>
        {
          Props.barbers.map((barber: any) => 
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
