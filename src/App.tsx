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
  Resume
} from './pages';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();

  }, [])
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} >
              <Route index element={<About />} />
              <Route path="about" element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='resume' element={<Resume />} />
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
