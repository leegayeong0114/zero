import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Button, 
  Container, 
  Dropdown, 
  Navbar, 
} from 'react-bootstrap'
import { AuthContext } from '../../contexts/AuthContext'

const Header: React.FC = () => {

  const navigate = useNavigate()
  const { 
    authentication,
    signOut,
    authInfo: { authInfo }
  } = useContext(AuthContext)

  useEffect(() => {
    authentication()
  }, [])
  
  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>😺</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {
            !authInfo.isAuth ? 
              <Button variant="outline-secondary" onClick={() => navigate('/login')}>Login</Button>
                // <Button variant="success">Login</Button>
            :
              <Dropdown align="end">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic"></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate(`/${authInfo.authUser?.userId}`)}>내 정보</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/post')}>게시물</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => signOut()}>로그아웃</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header