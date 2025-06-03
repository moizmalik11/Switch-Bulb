import React from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {
    const {id} = useParams();
  return (
    <div>
      Userid : {id}
    </div>
  )
}

export default UseParams;

