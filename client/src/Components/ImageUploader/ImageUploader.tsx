import { Widget } from '@uploadcare/react-widget'

function ImageUploader() {
  return (
    <p>
        <label htmlFor='file'>Your file:</label>{' '}
        <Widget publicKey='f48e6bbbd22be563e8be' />
    </p>
  )
}

export default ImageUploader
