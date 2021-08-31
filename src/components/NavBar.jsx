import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">A S T R A S H O P</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Cervezas">Cervezas</Nav.Link>
            <Nav.Link href="#Vinos">Vinos</Nav.Link>
            <Nav.Link href="#Destilados">Destilados</Nav.Link>
            <Nav.Link href="#AlgoMas">Algo mas...</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default NavBar
