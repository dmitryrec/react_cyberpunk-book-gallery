import React, {Component} from 'react';
import "./PopUpPic.css";

export default function PopUpPic(props){
  return(
    <div class="popup">
      <h2>{props.title}</h2>
      <img src={props.originalUrl}/>
      <div>{props.description}</div>
      <span onClick={props.closePopup}></span>
    </div>
  )
}