import { Container, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">V2 Solutions Assignment</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
