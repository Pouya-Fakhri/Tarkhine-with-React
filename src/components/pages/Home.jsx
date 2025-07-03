import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      here is home page
      <Link to={`/TestPage`}  >go to test page</Link>
    </div>
  )
}

export default Home
