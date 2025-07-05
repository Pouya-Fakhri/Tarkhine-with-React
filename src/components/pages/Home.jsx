import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../Slider'

function Home() {
  return (
    <div>
       <Slider />
      <Link to={`/TestPage`}  >go to test page</Link>
    </div>
  )
}

export default Home
