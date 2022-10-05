
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
import AppBar from './components/app-bar/AppBar';
import Focus from './components/focus/Focus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          {/* <Route  path="/" element={<AppBar />} /> */}
          <Route index path='/' element={<App />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/focus' element={<Focus />} />
        </Routes>

      </BrowserRouter>

    </div>
  </React.StrictMode>
);

