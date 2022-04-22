import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Manatee from '../Manatee/Manatee';

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Manatee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

