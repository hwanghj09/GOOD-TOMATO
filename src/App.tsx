import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MarkdownPage from './pages/MarkdownPage';
function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 Not Found</h1>
      <p>페이지가 존재하지 않습니다. 주소를 다시 확인해주세요.</p>
    </div>
  );
}
const App = ()=> {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/:lang/:docName" element={<MarkdownPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
