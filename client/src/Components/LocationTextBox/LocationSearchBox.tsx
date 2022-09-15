import { Autocomplete } from '@react-google-maps/api'

function LocationSearchBox() {
  return (
    <Autocomplete>
      <input type="text"></input>
    </Autocomplete>
  )
}

export default LocationSearchBox
