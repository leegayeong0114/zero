import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, getPostOne } from '../../utils/apis/post'
import { IPost } from '../../types/Post'
import { toastError, toastSuccess } from '../../utils/ToastUtil'

const PostDetail: React.FC = () => {

  const navigate = useNavigate()
  const [post, setPost] = useState<IPost>()
  const { postNo }  = useParams()
  
  useEffect(() => {
    getPostInfo()
  }, [])

  const getPostInfo = async () => {
    const data = await getPostOne(Number(postNo))
    setPost(data)
  }

  const deletePostInfo = async () => {
    const data = await deletePost(Number(postNo))
    if(data && data.affected !== 0) {
      toastSuccess('✔ 삭제 성공')
      navigate('/post')
    } else {
      toastError('🚨 삭제 실패 🚨')
    }
  }

  if(!post) return <div>no content</div>

  return (
    <>
      <div>
        <button type="button" onClick={() => {navigate(`/post/edit/${postNo}`)}}>수정</button>
        <button type="button" onClick={deletePostInfo}>삭제</button>
      </div>
      <div>
        {post.postNo}/
        {post.title}/
        {post.description}/
        {post.createdAt}/
        {post.updatedAt}/
      </div>
    </>
  )
}

export default PostDetail