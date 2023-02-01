import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../types/Post'
import { getPostAll } from '../../utils/apis/post'

const PostList: React.FC = () => {

  const navigate = useNavigate()
  const [postList, setPostList] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    getPostList()
  }, [])
  
  const getPostList = async () => {
    const data  = await getPostAll()
    setPostList(data)
    setIsLoading(true)
  }

  return (
    <>
      <Row className="mb-2 justify-content-end" style={{ textAlign: 'right'}}>
        <Col xs="auto">
          <Button variant="outline-success" size="sm" onClick={() => navigate('/post/register')}>등록</Button>
        </Col>
      </Row>
      {
        !isLoading ?
          <Spinner animation="border" variant="warning" />
        :
          <div className="d-grid gap-3">
            {
              postList.length !== 0 ?
                postList.map((post, i) => {
                  return (
                    <div className="p-2 bg-light border" key={i} onClick={() => {navigate(`/post/${post.postNo}`)}}>
                      {post.postNo}.
                      {post.title}/
                    </div>
                  )
                })
              :
                <div>🚨 게시글 없음 🚨</div>
            }
          </div>
      }
    </>
  )
}

export default PostList