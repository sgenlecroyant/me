
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AboutMe from './components/contact/AboutMe';
import MyBottomNavigationAction from './components/contact/MyBottomNavigationAction';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div>
    <BrowserRouter>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route index path='/contact' element={<Contact />} />
        </Routes>
        <MyBottomNavigationAction />
    </BrowserRouter>
    
  </div>
  </React.StrictMode>
);

