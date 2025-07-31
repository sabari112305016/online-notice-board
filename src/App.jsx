import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NoticeBoard from './components/NoticeBoard';
import NoticeDetails from './components/NoticeDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NoticeBoard />} />
      <Route path="/notice/:id" element={<NoticeDetails />} />
    </Routes>
  );
}

export default App;
