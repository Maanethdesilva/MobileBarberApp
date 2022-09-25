import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { APIKEY } from './APIKey'
import Geocode from 'react-geocode'
import { Button } from '@mui/material'

const containerStyle = {
  width: '800px',
  height: '800px',
}

const options = {
  clickableIcons: false,
}

const center = {
  lat: 44,
  lng: -79.5,
}

function Maps({barbers}: any) {
  const [refresh, setRefresh] = useState(1)

  const getCoordinates = () => {
    Geocode.setApiKey(APIKEY.toString())

    barbers && barbers.length > 0 && barbers.map((sp: any) => {
      Geocode.fromAddress(sp.Area).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          setRefresh(refresh+1)
          pos.push({ lat: lat, lng: lng })
        },
        (error) => {
          console.error(error)
        }
      )
      return null
    })
  }

  const [pos] = useState<any[]>([])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKEY.toString(),
    libraries: ['places'],
  })

  if (!isLoaded) {
    getCoordinates()
    return <h1>Loading</h1>
  }
  
    return (
      <div>
         <Button
          type="submit"
          onClick={() => {
            setRefresh(refresh + 1)
          }}
        > Refresh </Button>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={options}
          onLoad={() => getCoordinates()}
        >
          {pos.map((item: any) => {
            return <MarkerF key={item.lat+item.lng} position={item} />
          })}
        </GoogleMap>
       
      </div>
    )
}

export default Maps
