import { APIKEY } from '../MapsAPI/APIKey'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import TextField from '@mui/material/TextField'

function LocationSearchBox() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: APIKEY.toString(),
    libraries: ['places'],
  })

  if(!isLoaded){
    return null
  }
  
  return (
    <Autocomplete>
      <TextField required id="outlined-required" />
    </Autocomplete>
  )
}

export default LocationSearchBox
