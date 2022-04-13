import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container)
root.render(<App tab="home" />)
root.render(<App tab="profile" />);

// ReactDOMClient.createRoot(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root')
// );


