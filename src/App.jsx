import React, {useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AOS from "aos"

import { ToastContainer } from "react-toastify"

import ContextProvider from "./Context/ContextProvider"

import { Home } from './Pages/Home'
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Resume } from "./Pages/Resume"

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
            <Route path='/' element={<Home />} exact >
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

export default App;
