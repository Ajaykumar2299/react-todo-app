import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Create from "./components/Create";
import Update from "./components/Update";
import Home from './components/Home';
import Pnf from './components/Pnf';


function App(props) {
  return (
    <BrowserRouter>
                <Menu/>
              <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/create`} element={<Create/>} />
                <Route path={`/update/:id`} element={<Update/>} />
                <Route path={`/*`} element={<Pnf />} />
              </Routes>      
    </BrowserRouter>
  );
}

export default App;
