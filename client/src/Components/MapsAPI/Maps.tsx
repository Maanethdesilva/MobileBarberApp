import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { APIKEY } from './APIKey';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 44,
  lng: -79.5
};

const options = {
    disableDefaultUI: true,
    clickableIcons: false,
}


function Maps() {
  return (
        <LoadScript
        googleMapsApiKey={APIKEY.toString()}
    >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Maps)
