import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AOS from "aos"
import 'aos/dist/aos.css'

import { ToastContainer } from "react-toastify"

import { ContextProvider } from "./context"

import {
  Home,
  About,
  Contact,
  Resume,
  Projects
} from './pages';

function App() {

  useEffect(() => {

    AOS.init({ duration: 1200 });
    let timerId : any = null;
    let listenerDidInit = true;
    const refreshAos = () => {
      timerId = setTimeout(() => {
        AOS.refresh()
      }, 1200)
     }
    if (document.readyState !== 'loading') {
      refreshAos();
      listenerDidInit = false
    } else{
      document.addEventListener("DOMContentLoaded", refreshAos) 
    }
    return () =>{
      clearTimeout(timerId)
      if (listenerDidInit) document.removeEventListener("DOMContentLoaded", refreshAos)
    }
  }, [])

  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route index element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path='resume' element={<Resume />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </ContextProvider>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </>
  );
}

export default App
