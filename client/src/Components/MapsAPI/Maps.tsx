import { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { APIKEY } from './APIKey'
import Geocode from 'react-geocode'
import Axios from 'axios'
import LocationSearchBox from '../LocationTextBox/LocationSearchBox'

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

function Maps() {
  const [refresh, setRefresh] = useState(1)

  const [serviceProvider, setServiceProvider] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getServiceProviders').then(
      (response) => {
        console.log('client side', response.data)
        setServiceProvider(response.data)
      }
    )
  }, [])

  const getCoordinates = () => {
    Geocode.setApiKey(APIKEY.toString())

    serviceProvider.map((sp: any) => {
      Geocode.fromAddress(sp.Area).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location

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
    return <h1>Loading</h1>
  }

  return (
    <div>
      <LocationSearchBox />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
        onLoad={() => getCoordinates()}
      >
        {pos.map((item: any) => {
          return <MarkerF key={item.lat} position={item} />
        })}
      </GoogleMap>
      <button
        type="submit"
        onClick={() => {
          setRefresh(refresh + 1)
        }}
      ></button>
    </div>
  )
}

export default Maps
