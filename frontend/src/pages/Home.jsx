import React from 'react'
import Navbar from '../components/Navbar'
import Heder from '../components/Heder'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
    <Navbar/>
    <Heder/>
    <BlogList/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home