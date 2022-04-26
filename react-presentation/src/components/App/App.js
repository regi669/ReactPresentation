import React from 'react';
/*
* Next step is to import useSelector from react-redux
*/
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  /*
  * In order to access the store we need to assign some variable
  * a hook called useSelector, this hook will receive the state of store
  * as an argument that we will use to return birds
  * this component will re-render whenever the Hook is called*/
  const birds = useSelector(state => state.birds);
  /*Not that we have the data we can display it using unordered list element
  * we are using map arrow function to loop through every bird from the list*/
  return (
   <div className="wrapper">
    <h1>Bird List</h1>
    <ul>
      {birds.map(bird => (
        <li key={bird.name}>
          <h3>{bird.name}</h3>
          <div>
          Views: {bird.views}
          </div>
        </li>
      ))}
    </ul>
   </div>
  );
}
  

export default App;
