import { Button, Input } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

function EditUser() {
    const location=useLocation()
    console.log(location)
    const name=location.state.data
  return (
    <div>
    <Input value={name}/>
    <Button>Update</Button>
    </div>
  )
}

export default EditUser
