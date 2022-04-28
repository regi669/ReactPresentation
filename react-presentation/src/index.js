import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

/*
* React Redux is the official React binding for Redux. 
* It allows React components to read data from a Redux Store, 
* and dispatch Actions to the Store to update data. 
* Redux helps apps to scale by providing a sensible way to manage 
* state through a unidirectional data flow model. React Redux is conceptually simple. */

/*
* First step is to install react-redux using command
* npm install --save redux react-redux
* Then we need to import Provider from react-redux
* Provider is a main element that wraps our application*/
import { Provider } from 'react-redux';

/*
* After importing provider we need to wrap out App in it
* simply by using react Provider Tag*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals().unregister();
