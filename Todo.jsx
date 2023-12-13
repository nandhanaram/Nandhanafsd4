import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {
  const[names,setNames]=useState()
  const[data,setData]=useState([])

  const inputhandler=(e)=>{
    setNames(e.target.value)
  }
  
  const addhandler=()=>{
    setData((data=>[...data,names]))
    setNames(' ')
  }

  return (
    <div>
        <TextField variant='filled' onChange={inputhandler} >Enter the details</TextField><br/><br/>
        <Button variant='contained'onClick={addhandler}>Submit</Button>
       
    {data.map((value,index)=>{
        return(
            <li key={index}>{value}</li>
        )})}

    </div>
  )
}

export default Todo