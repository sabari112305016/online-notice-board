import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NoticeBoard.css';

function NoticeBoard() {
  const navigate = useNavigate();

  const [notices, setNotices] = useState([
    { id: 1, title: 'Holiday Announcement', content: 'Friday is a holiday due to a festival.' },
    { id: 2, title: 'Exam Schedule', content: 'Semester exams start next Monday.' }
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', content: '' });

  const handleClick = (notice) => {
    navigate(`/notice/${notice.id}`, { state: { ...notice } });
  };

  const handleDelete = (id) => {
    setNotices(notices.filter(n => n.id !== id));
  };

  const handleAdd = () => {
    if (!newNotice.title.trim()) return;
    const id = Date.now();
    setNotices([...notices, { ...newNotice, id }]);
    setNewNotice({ title: '', content: '' });
  };

  return (
    <div className="noticeboard-container">
      <h1>📌 Online Noticeboard</h1>

      <div className="add-form">
        <input
          type="text"
          placeholder="Title"
          value={newNotice.title}
          onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNotice.content}
          onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
        />
        <button onClick={handleAdd}>Add Notice</button>
      </div>

      <div className="card-grid">
        {notices.map(notice => (
          <div className="card" key={notice.id}>
            <div className="card-body" onClick={() => handleClick(notice)}>
              <h3>{notice.title}</h3>
              <p>{notice.content.length > 60 ? notice.content.substring(0, 60) + '...' : notice.content}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(notice.id)}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;
