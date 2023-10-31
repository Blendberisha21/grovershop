import React from 'react'
import Body from './components/Body/Body'
import Choose from './components/Choose/Choose'
import Deliver from './components/Delivery/Deliver'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Serve from './components/Serve/Serve'
import hljs from 'highlight.js';


const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Serve/>
      <Choose/>
      <Deliver/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App