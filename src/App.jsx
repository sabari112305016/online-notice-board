import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoticeBoard from './components/NoticeBoard';
import NoticeDetails from './components/NoticeDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NoticeBoard />} />
      <Route path="/notice/:id" element={<NoticeDetails />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
