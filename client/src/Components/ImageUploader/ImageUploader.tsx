import { Widget } from '@uploadcare/react-widget'
import { APIKEY } from './APIKey'

function ImageUploader() {
  return (
    <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Widget publicKey={APIKEY} />
    </p>
  )
}

export default ImageUploader
