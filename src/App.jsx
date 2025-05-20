import React from 'react'
import Header from './Header'
import "./App.css"
import Footer from './Footer'
import Content from './Content'
export default function App() {

  return (
    <div className='F'>
      
      <Header/>
      <Content data="Content" />
      <Footer/> 
    </div>
  )
}
