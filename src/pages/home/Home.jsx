import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending'
import TopRated from './TopRated'
import Popular from './Popular'

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
    </div>
  )
}

export default Home