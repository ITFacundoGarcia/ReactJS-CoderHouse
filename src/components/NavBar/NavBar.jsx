import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { CartWidget } from  "../CartWidget/CartWidget"



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
          <Navbar.Brand href="#home">
          A S T R A S H O P
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Cervezas">Cervezas</Nav.Link>
            <Nav.Link href="#Vinos">Vinos</Nav.Link>
            <Nav.Link href="#Destilados">Destilados</Nav.Link>
            <Nav.Link href="#AlgoMas">Algo mas...</Nav.Link>
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
          <CartWidget/>
          </Container>
        </Navbar>
    </>
  )
}

export default NavBar






