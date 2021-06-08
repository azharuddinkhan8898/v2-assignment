import { Container, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">INTECH Assignment</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
