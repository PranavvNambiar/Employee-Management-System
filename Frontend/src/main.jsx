import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployee from './components/ListEmployee'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Employee from './components/Employee'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ListEmployee />}></Route>
        <Route path="/employees" element={<ListEmployee />}></Route>
        <Route path="/add-employee" element={<Employee />}></Route>
        <Route path='/edit-employee/:id' element={<Employee/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
