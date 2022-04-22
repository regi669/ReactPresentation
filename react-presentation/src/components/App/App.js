import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBird } from '../../store/birds/birds';
import logo from './logo.svg';
import './App.css';

function App() {

  const birds = useSelector(state => state.birds);
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(incrementBird(bird.name))}>
            <span role="img" aria-label="add">➕</span></button>
          </div>
        </li>
      ))}
    </ul>
   </div>
  );
}
  

export default App;
