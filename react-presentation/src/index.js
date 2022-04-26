import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
/*
* Next Step is to import createStore method from redux
*/
import { createStore } from 'redux';

/*
* After importing we need to use createStore
* function with arrow function
* in order to create birds list*/
const store = createStore(() => ({
  birds: 
  [
    {
      name: 'Jack',
      views: 15
    },
    {
      name: 'Maister',
      views: 25
    },
    {
      name: 'Jerry',
      views: 36
    }
  ]
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
/*
* After creating store we need to pass it to Provider prop called store
* in order for it to be executed*/
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals().unregister();
