import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/post">게시물</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header