import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

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
