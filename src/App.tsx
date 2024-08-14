//import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage/Homepage';

import BlogPage from './Components/Blogpage/Blogpage';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/blogs/kafka-blog" element={<BlogPage/>}/>



        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
