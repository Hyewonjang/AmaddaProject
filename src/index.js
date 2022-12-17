import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Product_details from './pages/Product_details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><App/></BrowserRouter>
);


