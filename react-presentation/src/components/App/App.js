/*
* Import useState from react in order to save user input*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBird, incrementBird } from '../../store/birds/birds';
import './App.css';

function App() {
  /*
  * Initialize useState
  */
  const [birdName, setBird] = useState('');
  /*
  * Add a sort function to bird to prevent birds from changing order*/
  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  /*
  * Create handleSubmit event
  * to use dispatch to call addBird function in order to
  * addBird with choosen name*/
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addBird(birdName))
    setBird('');
  };
  /*
  * Add onChange function to setBird name
  * and also add onSubmit function to call handleSubmit*/
  return (
   <div className="wrapper">
    <h1>Bird List</h1>

    <form onSubmit={handleSubmit}>
      <label>
        <p>
          Add Bird
        </p>
        <input
          type="text"
          onChange={e => setBird(e.target.value)}
          value={birdName}
        />
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
