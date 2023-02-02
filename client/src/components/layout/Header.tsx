import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Button, 
  Container, 
  Dropdown, 
  DropdownButton, 
  Nav, 
  Navbar, 
  NavDropdown 
} from 'react-bootstrap'

const Header: React.FC = () => {

  const navigate = useNavigate()

  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>😺</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-secondary" onClick={() => navigate('/login')}>Login</Button>
          {/* <Button variant="success">Login</Button> */}
          {/* <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              click
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/')}>내 정보</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/post')}>게시물</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => navigate('/')}>로그아웃</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header