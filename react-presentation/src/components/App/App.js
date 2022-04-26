import React from 'react';
/*
* Import useSelector and incrementBird
*/
import { useDispatch, useSelector } from 'react-redux';
import { incrementBird } from '../../store/birds/birds';
import './App.css';

function App() {
  /*
  * Create const birds as a useSelector in order to loop
  * through all birds
  */
  const birds = useSelector(state => state.birds);
  /*
  * Create dispatch in order to change elements inside birds list*/
  const dispatch = useDispatch();

  /*
  * Inside button add onClick event to listen for user clicks
  * and after the user clicks the button call the dispatch function
  * and inside this function call incrementBird function to add 1 views to choosen bird*/
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
