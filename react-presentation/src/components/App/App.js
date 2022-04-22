import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/manatee" element={<Manatee/>}/>
          <Route path="/narwhal" element={<Narwhal/>}/>
          <Route path="/whale" element={<Whale/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

