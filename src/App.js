import React from 'react';
import {Route , BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css';  
import AddCourtPage from "./pages/AddCourtPage"
import CourtPage from "./pages/CourtPage"
import HomePage from "./pages/HomePage"  
import  SearchPage  from "./pages/SearchPage"
import Nav from "./componets/Nav"






function App() {
  return (
      <div className='wrapper'>
      <Router>
            <Routes>
                <Route path="/"  element={<HomePage/>}/>
                <Route path="/add"  element={<AddCourtPage/>}/> 
                <Route path="/:id"  element={<CourtPage/>}/> 
                <Route path="/search"  element={<SearchPage/>}/>

            </Routes>
            <Nav/>   

      </Router> 
      </div>
  );
}

export default App;
