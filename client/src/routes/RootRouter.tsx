import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostDetail from '../pages/post/PostDetail'
import PostEdit from '../pages/post/PostEdit'
import PostList from '../pages/post/PostList'
import PostRegister from '../pages/post/PostRegister'
import Main from '../pages/Main'

const RootRouter: React.FC = () => {
  return (
    <Routes>
      {/* main */}
      <Route path="/" element={<Main />} />
      {/* post */}
      <Route path="/post" element={<PostList />} />
      <Route path="/post/:postNo" element={<PostDetail />} />
      <Route path="/post/register" element={<PostRegister isUpdate={false} />} />
      <Route path="/post/edit/:postNo" element={<PostRegister isUpdate={true} />} />
    </Routes>
  )
}

export default RootRouter