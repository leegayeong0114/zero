import React, { useContext } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const MyPage = () => {

  const navigate = useNavigate()

  const { 
    authInfo: { authInfo }
  } = useContext(AuthContext)

  if(!authInfo.isAuth) navigate('/login')

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Row className="justify-content-md-center">
          <Col xxl>{authInfo.authUser?.userId}</Col>
          <Col xxl>내 정보</Col>
        </Row>
      </div>
      <div className="justify-content-center ta-center">
        <Tabs
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="tab1" title="tab1" >
            <div>1</div>
          </Tab>
          <Tab eventKey="tab2" title="tab2">
            <div>2</div>
          </Tab>
          <Tab eventKey="tab3" title="tab3">
            <div>3</div>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default MyPage