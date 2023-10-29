import React from 'react'
import '../css/Error.scss'

const Error = ({children}) => {
  return (
    <div className='error'>
        <p>{children}</p>
    </div>
  )
}

export default Error
