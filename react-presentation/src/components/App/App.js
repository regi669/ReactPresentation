import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const birds = useSelector(state => state.birds);
  /*
  * Next step is to add 1 input form and a button in order for us to
  * use these components to increment and add new birds in the future*/
  return (
   <div className="wrapper">
    <h1>Bird List</h1>

    <form>
      <label>
        <p>
          Add Bird
        </p>
        <input type="text" />
      </label>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>

    <ul>
      {birds.map(bird => (
        <li key={bird.name}>
          <h3>{bird.name}</h3>
          <div>
          Views: {bird.views}
          <button><span role="img" aria-label="add">➕</span></button>
          </div>
        </li>
      ))}
    </ul>
   </div>
  );
}
  

export default App;
