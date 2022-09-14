import React, { useState, useEffect } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete
} from '@react-google-maps/api'
import { APIKEY } from './APIKey'
import Geocode from 'react-geocode';
import Axios from 'axios';

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

  const [refresh, setRefresh] = useState(1);

  const [map, setMap] = useState(null)
  
  const [serviceProvider, setServiceProvider] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3002/api/getServiceProviders").then((response) => {
      console.log('client side', response.data);
      setServiceProvider(response.data);
    });
  }, []);

  const getCoordinates = () => {
    Geocode.setApiKey(APIKEY.toString())


    serviceProvider.map((sp) => {
      Geocode.fromAddress(sp.Area).then(
        (response) => { 
          const { lat, lng } = response.results[0].geometry.location
          pos.push({ lat: lat, lng: lng })
        },
        (error) => {
          console.error(error) 
        }
      )
    }) 
    setRefresh(refresh+1)

    console.log('refreshed', refresh)
  }

  const [pos, setPos] = useState([])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKEY.toString(),
    libraries: ['places'],
  })

  if (!isLoaded) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <Autocomplete>
        <input type="text"></input>
      </Autocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {pos.map((item) => <MarkerF key={item.lat} position={item}/>)}
      </GoogleMap>
      <button type="submit" onClick={() => {getCoordinates(); setRefresh(refresh+1)}}></button>
    </div>
  )
}

export default Maps
