import React from 'react'

interface IProps {
  no: number | string,
  name: string,
  age: number
}

const Component: React.FC<IProps> = ({ 
  no, 
  name, 
  age 
}) => {
  return (
    <div>{`no: ${no} name: ${name} age: ${age}`}</div>
  )
}

export default Component