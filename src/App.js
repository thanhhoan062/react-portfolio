import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Service } from './components/layout';

import { Home, About } from './components/page';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" id="page-top">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/project" element={<ProjectContainer />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
