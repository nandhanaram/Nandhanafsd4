import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Button variant='contained' color='error'>
                <Link to={'/todo'}>form</Link>
            </Button>&nbsp;&nbsp;
            <Button variant='contained' color='error'>
                <Link to={'/'}>Details</Link>
            </Button>
        </Toolbar>
      </AppBar>


    </div>
  )
}

export default Navbar