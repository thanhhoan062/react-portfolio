import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, Footer } from './components/layout';
import {
  Home,
  About,
  ProjectsPage,
  ContactPage,
  // ProjectDetail,
} from './components/page';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" id="page-top">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/project/:slug" element={<ProjectDetail />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
