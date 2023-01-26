import React, { useEffect } from 'react'
import Component from '../components/Component'
import useInput from '../hooks/useInput'

const Page1: React.FC = () => {

  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  useEffect(() => {
    console.log('움직인다.', id, password)
  }, [id, password])
  

  return (
    <div>
      <input type="text" value={id} onChange={onChangeId}/>
      <input type="text" value={password} onChange={onChangePassword}/>
      <Component no="1" name="" age={12}/>
      <Component no={2} name="" age={10}/>
      <Component no="1" name="" age={43}/>
    </div>
  )
}

export default Page1