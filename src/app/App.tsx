import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Path } from '../constants/route-path';
import Home from '../pages/home';


const App =()=> {


  return (
    <Routes>
      <Route
        path={Path.HOME}
        element={
            <Home />
        }
      />
    </Routes>
  );
}

export default App;
