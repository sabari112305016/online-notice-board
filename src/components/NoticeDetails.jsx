import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeading, FaAlignLeft } from 'react-icons/fa';
import './NoticeDetails.css';

function NoticeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content } = location.state || {};

  return (
    <div className="details-container">
      <div className="details-card">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Board
        </button>

        <div className="detail-section">
          <h2><FaHeading className="icon" /> {title || "No Title"}</h2>
        </div>

        <div className="detail-section">
          <p><FaAlignLeft className="icon" /> {content || "No Content Provided."}</p>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetails;
