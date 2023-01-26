import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../types/Post'
import { getPostAll } from '../../utils/apis/post'

const PostList: React.FC = () => {

  const navigate = useNavigate()
  const [postList, setPostList] = useState<IPost[]>([])
  
  useEffect(() => {
    getPostList()
  }, [])
  
  const getPostList = async () => {
    const data  = await getPostAll()
    setPostList(data)
  }

  return (
    <div>
      <div>
        <button type="button" onClick={() => {navigate('/post/register')}}>등록</button>
      </div>
      <div>
        {
          postList.length !== 0 ?
            postList.map((post, i) => {
              return (
                <div key={i} onClick={() => {navigate(`/post/${post.postNo}`)}}>
                  {post.postNo}/
                  {post.title}/
                  {post.description}/
                  {post.createdAt}/
                  {post.updatedAt}/
                </div>
              )
            })
          :
            <div>🚨 게시글 없음 🚨</div>
        }
      </div>
    </div>
  )
}

export default PostList