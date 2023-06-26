import React from 'react'
import './Main.css';

export default function Main() {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo-upper" src="assets/Z_svg.svg"/>
        <div className="zip-logo-container">
          <div className="zip-text-wrapper">
            <h1 className="zip-txt">ZIP</h1>
            <p className="messenger-txt">Messenger</p>
          </div>
          <div className="zip-logo-wrapper">
            <img className="logo1" src="assets/V_svg.svg" />
            <img className="logo2" src="assets/S_svg.svg" />
            <img className="logo3" src="assets/G_svg.svg" />
          </div>
        </div>
      </div>

      <div className="sms-container">
        <div className="sms-wrapper">
          <div className="message-header">
            <h1 className="main-header-txt">Message</h1>
            <p className="side-txt">Enter message below</p>
          </div>
          <textarea className="message-txt" cols="30" rows="30"></textarea>
        </div>
      </div>

      <div className="btn-container">
        <button className="btn-send"><p>SEND</p></button>
        <button className="btn-cancel"><p>CANCEL</p></button>
      </div>
    </div>
  )
}
