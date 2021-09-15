import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <><Navbar bg="dark" variant="dark">
          <Container>
          <img
          alt="LogoAstra"
          src="https://image.flaticon.com/icons/png/512/1752/1752801.png"
          width="30"
          height="30"
          className="d-inline-block align-top, m-2"
          />
          <Link exact to='/'>
          <Navbar.Brand href="#home">
          A S T R A S H O P
          </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
          <Link exact to='/categoria/Whisky'>
            <Nav.Link href="#Cervezas">Whisky</Nav.Link>
          </Link>
          <Link exact to='/categoria/Vinos'>
            <Nav.Link href="#Vinos">Vinos</Nav.Link>
          </Link>
          <Link exact to='/categoria/Destilados'>
            <Nav.Link href="#Destilados">Destilados</Nav.Link>
          </Link>
          <Link exact to='/categoria/Algo-mas'>
            <Nav.Link href="#AlgoMas">Algo mas...</Nav.Link>
          </Link>
          </Nav>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Búsqueda"
              className="mr-2"
              aria-label="Search"
            />
            <div className="ms-3">
            <Button variant="outline-light">Buscar</Button>
            </div>
          </Form>
          </Container>
        </Navbar>
    </>
  )
}

export default NavBar






