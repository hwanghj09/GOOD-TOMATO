import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MarkdownPage from './pages/MarkdownPage';

const App = ()=> {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='menu' element={<Menu />}/>
        <Route path="/:lang/:docName" element={<MarkdownPage />} />
      </Routes>
    </Router>
  );
}

export default App;
