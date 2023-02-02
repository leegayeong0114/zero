import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostDetail from '../pages/post/PostDetail'
import PostList from '../pages/post/PostList'
import PostRegister from '../pages/post/PostRegister'
import Main from '../pages/Main'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'

const RootRouter: React.FC = () => {
  return (
    <Routes>
      {/* main */}
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* post */}
      <Route path="/post" element={<PostList />} />
      <Route path="/post/:postNo" element={<PostDetail />} />
      <Route path="/post/register" element={<PostRegister isUpdate={false} />} />
      <Route path="/post/edit/:postNo" element={<PostRegister isUpdate={true} />} />
      {/* pet */}
      {/* <Route path="/:petNickname" element={<></>} />
      <Route path="/:petNickname/:writedDt" element={<></>} /> */}
    </Routes>
  )
}

export default RootRouter