import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="" style={{background:'#4863A0'}}>
    <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand style={{color:'#ffffff',fontSize:'3rem'}} className='fw-bolder d-flex align-items-center'>
     <i className='fa-solid fa-circle-play me-3'></i>{''}
        Media Player
      </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default Header