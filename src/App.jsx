

import Header from "./Components/Header/Header"
import  Footer  from "./Components/Footer/Footer"
import Home from "./Components/HomePage/Home"
import { Route, Routes } from "react-router-dom"
import NotMatch from "./Components/NotMatchPage/NotMatch"
import About from "./Components/AboutPage/About"
import Blog from "./Components/BlogPage/Blog"



function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/home" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/blog" element={ <Blog/>}/>
        <Route path="*" element={ <NotMatch/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
