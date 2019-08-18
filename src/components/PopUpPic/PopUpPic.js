import React from 'react';
import "./PopUpPic.css";

export default function PopUpPic({ title, originalUrl, description, closePopup }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <span className="close" onClick={closePopup}>ЗАКРЫТЬ</span>
        <h2>{title}</h2>
        <img src={originalUrl} alt="cover" id="image" />
        <div>{description}</div>
      </div>
    </div>
  )
}