import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export default function PageNotFound() {
  return (
    <div className='page'>
      <h1>
        Page Not Found
      </h1>
      <Link to={"/"} className='btn btn-primary'>Go To Home</Link>
    </div>
  )
}
