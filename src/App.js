

import React, { Component, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const ModalMenu = ({ show, children }) => (
  <CSSTransition
    in={show}
    timeout={200}
    unmountOnExit
    classNames={{
      enter: '__modal-menu',
      enterActive: '__modal-menu __is-active',
      enterDone: '__modal-menu __is-active',
      exit: '__modal-menu',
      exitActive: '__modal-menu',
      exitDone: '__modal-menu',
    }}
  >
    <div>
      {children}
    </div>
  </CSSTransition>
);

const TimeDisplay = () => {
  const timeData = () => {
    const date = new Date();
    return {
      clockStr: `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`,
      dateStr: `${date.getMonth() + 1}月${date.getDate()}日 ${['日','月','火','水','木','金','土'][date.getDay()]}曜日`
    }
  }
  const td = timeData();
  const [clockStr, setClockStr] = useState(td.clockStr);
  const [dateStr, setDateStr] = useState(td.dateStr);
  
  useEffect(() => {
    setInterval(() => {
      const td = timeData();
      setClockStr(td.clockStr);
      setDateStr(td.dateStr);
    },1000)
  }, [])
  
  return (
    <React.Fragment>
      <div className="fixed left-0 w-full top-28">
        <div className="text-center text-white">
          <div className="text-7xl font-extralight">{clockStr}</div>
          <div className="text-xl font-light leading-10">{dateStr}</div>
        </div>
      </div>
    </React.Fragment>
  )
};

const LockIcon = ({fill}) => (
  <svg viewBox="0 0 46 67">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M34.8,27v-9c0-6.4-5.1-11.5-11.5-11.5h-0.5c-6.4,0-11.5,5.1-11.5,11.5v9H34.8z M41.3,27.1c2.7,0.6,4.7,3,4.7,5.9v27.5c0,3.3-2.7,6-6,6H6c-3.3,0-6-2.7-6-6V33c0-2.9,2-5.3,4.8-5.9V18c0-9.9,8.1-18,18-18h0.5c9.9,0,18,8.1,18,18V27.1z"/>
  </svg>
);
const FlashlightIcon = ({fill}) => (
  <svg viewBox="0 0 26 68">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M13,40c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3s3,1.3,3,3C16,38.7,14.7,40,13,40z M13,26.5c-2.5,0-4.5,2-4.5,4.5v6c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5v-6C17.5,28.5,15.5,26.5,13,26.5z M0,6h26c0,9-6,12-6,18c0,0,0,13.3,0,40c0,2.2-1.8,4-4,4h-6c-2.2,0-4-1.8-4-4V24C6,18,0,15,0,6z M2,0h22c1.1,0,2,0.9,2,2v2H0V2C0,0.9,0.9,0,2,0z"/>
  </svg>
);
const CameraIcon = ({fill}) => (
  <svg viewBox="0 0 64 48">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d="M51,17c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C53,16.1,52.1,17,51,17z M7,3.5h4c0.6,0,1,0.4,1,1V6H6V4.5C6,3.9,6.4,3.5,7,3.5z M32,41c-7.7,0-14-6.3-14-14s6.3-14,14-14s14,6.3,14,14S39.7,41,32,41z M32,38.5c6.4,0,11.5-5.1,11.5-11.5S38.4,15.5,32,15.5S20.5,20.6,20.5,27S25.6,38.5,32,38.5z M4,8h10.3c1,0,2-0.5,2.5-1.4l2.4-3.8c1.1-1.8,3-2.8,5.1-2.8h15.3c2.1,0,4,1.1,5.1,2.8l2.4,3.8C47.7,7.5,48.6,8,49.7,8H60c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V12C0,9.8,1.8,8,4,8z"/>
  </svg>
);

const App = () => {
  const [modalMenu, setModalMenu] = useState(false);
  
  return (
    <React.Fragment>
      <div className="__bg-image"></div>
      <ModalMenu show={modalMenu}>
        <div
          className="absolute w-full h-full opacity-0"
          onClick={() => setModalMenu(false)}
        />            
        <div className="absolute w-full __card">
          <div className="max-w-screen-sm p-5 m-auto bg-gray-100 border-4 border-gray-500 right-6 rounded-2xl">
            <div>モーダルを開きました</div>
            <button onClick={() => setModalMenu(false)}>閉じる</button>
          </div>
        </div>
      </ModalMenu>
      <div className="fixed left-0 w-full top-16">
        <div className="flex justify-center">
          <button onClick={() => setModalMenu(true)}>
            <div style={{ width: '1.4rem' }}>
              <LockIcon fill="#fff" />
            </div>
          </button>
        </div>
      </div>
      <div className="fixed left-0 w-full px-12 bottom-10">
        <div className="flex justify-between max-w-screen-sm m-auto">
          <div className="flex items-center justify-center w-12 h-12 rounded-full __bg-blur">
            <div style={{ width: '0.56rem' }}>
              <FlashlightIcon fill="#fff" />
            </div>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full __bg-blur">
            <div style={{ width: '1.2rem' }}>
              <CameraIcon fill="#fff" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed left-0 w-full top-8">
        <div className="flex justify-end max-w-screen-sm m-auto">
          <div className="w-12 mr-6 h-0.5 bg-gray-400 opacity-60 rounded-sm"></div>
        </div>
      </div>
      <div className="fixed left-0 w-full bottom-2">
        <div className="w-32 h-1 m-auto bg-gray-100 rounded-sm"></div>
      </div>
      <TimeDisplay/>
    </React.Fragment>
  );
}

export default App;
