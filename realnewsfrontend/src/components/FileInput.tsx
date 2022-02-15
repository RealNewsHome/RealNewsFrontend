import React from 'react'
import Button from '@mui/material/Button';

const FileInput = () => {
  return (
    <>
  <input
    accept="image/*"
    type="file"
    id="select-image"
    style={{ display: 'none' }}
  />
  <label htmlFor="select-image">
    <Button variant="contained" color="primary" component="span">
      Upload Image
    </Button>
  </label>
</>

  )
};
export default FileInput;
