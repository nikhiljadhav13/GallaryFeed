import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Createpost from "./pages/Createpost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/create-post" element={<Createpost/>} />
        <Route path="/about" element={<h1>about</h1>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
