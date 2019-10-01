/* 

This file is the entry point which Webpack will use to start transpiling
It is technically the highest level of our component tree so by transpiling this
it will traverse the component tree and transpile every react file in the app

*/

// Import react since we need to convert the imported App module into a React component
import React from 'react';
// Import react DOM in order to mount our App to the DOM
import ReactDOM from 'react-dom';
// Import the App component which is the top level component of our app
import App from './components/App.jsx';

// Attach App to the DOM, replacing the div with ID app
ReactDOM.render(<App/>, document.getElementById('app'));