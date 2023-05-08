import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Create from './pages/Create';
import Details from './pages/Details';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
        <div style={{
            display: "flex",
            background: 'black',
            padding: '5px 0 5px 5px',
            marginBottom:'10px',
            fontSize: '20px'
        }}>
            <div style={{ margin: '10px' }}>
                <NavLink to="/" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Home
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/Create" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Create
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/Details" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Details
                </NavLink>
            </div>
        </div>
        <div style={{marginLeft:"5%", marginRight:"5%"}}>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/Details/:id" element={<Details />} />
        </Routes>
        </div>
    </BrowserRouter>
</>
  )
}

export default App
