import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Createpost from "./pages/Createpost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/create-post" element={<Createpost/>} />
        <Route path="/feed" element={<Feed/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
