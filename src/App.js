import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import profileImage from './images/profile-icon.png';
import './App.css';

const ModalMenu = ({ show, setModalMenu }) => (
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
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-30 w-screen h-screen opacity-0"
        onClick={() => setModalMenu(false)}
      />
      <div className="absolute w-full px-2 top-72">
        <div className="max-w-screen-sm p-5 m-auto rounded-xl __card">
          <div>モーダルを開きました</div>
          <button onClick={() => setModalMenu(false)}>閉じる</button>
        </div>
      </div>
    </div>
  </CSSTransition>
);

const TweetModal = ({ show, setTweetModal, setNotificationList, setTimeoutIdList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = e.target.tweet.value;
    if (tweet) {
      startNotifications({ tweet, setNotificationList, setTimeoutIdList });
      setTweetModal(false);
    }
  };
  return (
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
        <div
          className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen opacity-0"
          onClick={() => setTweetModal(false)}
        />
        <div className="absolute w-full px-2 top-72">
          <div className="max-w-screen-sm p-5 m-auto rounded-xl __card">
            <form onSubmit={handleSubmit}>
              <div className="flex p-2.5 bg-white rounded-xl">
                <ProfileImage />
                <textarea type="text" name="tweet" placeholder="いまどうしてる？" rows="5" className="w-full px-4 py-2 ml-2 bg-white" />
              </div>
              <div className="mt-4 text-center">
                <input type="submit" value="ツイートする(偽)" className="px-6 py-1 font-bold text-white rounded-full __bg-twitter-color" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const Notification = ({ show, setNotification, name, content }) => (
  <CSSTransition
    in={show}
    timeout={200}
    unmountOnExit
    classNames={{
      enter: '__notification',
      enterActive: '__notification __is-active',
      enterDone: '__notification __is-active',
      exit: '__notification __is-fadeout',
      exitActive: '__notification __is-fadeout',
      exitDone: '__notification __is-fadeout',
    }}
  >
    <div>
      <div
        className="absolute w-full h-full opacity-0"
        onClick={() => setNotification(false)}
      />
      <div className="absolute w-full px-2 top-64">
        <div className="max-w-screen-sm p-3 m-auto rounded-xl __card">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-6 p-1 rounded-md __bg-twitter-color"><TwitterIcon fill='white'/></div>
              <div className="ml-2 font-normal text-black text-opacity-50">TWITEER</div>
            </div>
            <div className="text-black text-opacity-40">今</div>
          </div>
            <div className="mt-3 font-extrabold">{name}さんがいいねしました：</div>
            <div className="font-thin">{content}</div>
        </div>
      </div>
    </div>
  </CSSTransition>
);

const Notifications = ({ notificationList, setNotificationList, timeoutIdList }) => (
  <React.Fragment>
    <CSSTransition
      in={notificationList.length ? true : false}
      timeout={0}
      unmountOnExit
      classNames={'bg-notification'}
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-30 w-screen h-screen opacity-0"
        onClick={() => {
          timeoutIdList.forEach(clearTimeout);
          setNotificationList([]);
        }}
      />
    </CSSTransition>
    <TransitionGroup className="fixed left-0 right-0 flex flex-col-reverse top-64">
      {notificationList && notificationList.map(notification => (
        <CSSTransition
          key={notification.id}
          timeout={1000}
          unmountOnExit
          classNames={{
            enter: '__notification',
            enterActive: '__notification __is-active',
            enterDone: '__notification __is-active',
            exit: '__notification __is-fadeout',
            exitActive: '__notification __is-fadeout',
            exitDone: '__notification __is-fadeout',
          }}
        >
          <div>
            <div className="w-screen px-2 mb-2">
              <div className="max-w-screen-sm p-3 m-auto rounded-xl __card">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-6 p-1 rounded-md __bg-twitter-color"><TwitterIcon fill='white'/></div>
                    <div className="ml-2 font-normal text-black text-opacity-50">TWITEER</div>
                  </div>
                  <div className="text-black text-opacity-40">今</div>
                </div>
                  <div className="mt-3 font-bold">{notification.name}さん{notification.action}</div>
                  <div className="font-thin">{notification.content}</div>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </React.Fragment>
);

const startNotifications = ({ tweet, setNotificationList, setTimeoutIdList }) => {
  const tweetSize = 1000;
  const tweets = [];
  const maxDisplaySize = 5;
  const names = ['山田', '田中', '井上', '中村', '上田'];
  const contents = [tweet, tweet, ''];
  const actions = ['がいいねしました：', 'がリツイートしました：', 'にフォローされました'];
  const timeoutIds = [];
  let delay = 3000;
  // const sigmoid = (x) => {
  //   return (1.0/(1.0 + Math.exp(-x)));
  // }
  setNotificationList([]);
  for (let i=0; i<tweetSize; i++) {
    let actionId = Math.floor(3 * Math.random(3));
    tweets.push({ id: uuid(), name: names[i%names.length], action: actions[actionId], content: contents[actionId] });
  }
  for (let i=0; i<tweetSize; i++) {
    let start = i < maxDisplaySize ? 0 : i + 1 - maxDisplaySize;
    let end = i + 1;
    let timeoutId = window.setTimeout(() => {
      setNotificationList(tweets.slice(start, end));
    }, delay);
    timeoutIds.push(timeoutId);
    if (i<5) {
      delay += 1500;
    } else if (i>=5 && i<10) {
      delay += 1000;
    } else if (i>=10 && i<30) {
      delay += 500;
    } else if (i>=30 && i<500) {
      delay += 200;
    } else {
      delay += 100;
    }
    // delay += 1000 - 900*sigmoid(-2 + (10*i)/tweetSize);
  }
  setTimeoutIdList(timeoutIds);
};

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
    }, 1000)
  }, []);
  
  return (
    <div className="fixed left-0 w-full top-28">
      <div className="text-center text-white">
        <div className="text-7xl font-extralight">{clockStr}</div>
        <div className="text-xl font-light leading-10">{dateStr}</div>
      </div>
    </div>
  )
};

const ProfileImage = () => (
  <img src={profileImage} alt="プロフィール画像" className="border-4 border-blue-200 rounded-full w-14 h-14" />
);

const TwitterIcon = ({fill}) => (
  <svg viewBox="0 0 512 512">
    <path fill={fill} style={{fillRule: 'evenodd', clipRule: "evenodd"}} d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z'/>
  </svg>
);
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
  const [tweetModal, setTweetModal] = useState(false);
  const [notificationList, setNotificationList] = useState([]);
  const [timeoutIdList, setTimeoutIdList] = useState([]);

  return (
    <React.Fragment>
      <div className="__bg-image"></div>
      <TweetModal show={tweetModal} setTweetModal={setTweetModal} setNotificationList={setNotificationList} setTimeoutIdList={setTimeoutIdList}/>
      <Notifications
        notificationList={notificationList}
        setNotificationList={setNotificationList}
        timeoutIdList={timeoutIdList}
      />
      <div className="fixed left-0 w-full top-16">
        <div className="flex justify-center">
          <div style={{ width: '1.4rem' }}>
            <LockIcon fill="#fff" />
          </div>
        </div>
      </div>
      <div className="fixed left-0 w-full px-12 bottom-10">
        <div className="flex justify-between max-w-screen-sm m-auto">
          <button onClick={() => {
            // let tweet = window.prompt('ツイートを入力してください');
            // if (tweet) {
            //   startNotifications({ tweet, setNotificationList, setTimeoutIdList });
            // }
            setTweetModal(true);
          }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full __bg-blur">
              <div style={{ width: '0.56rem' }}>
                <FlashlightIcon fill="#fff" />
              </div>
            </div>
          </button>
          <button onClick={() => {
            let tweet = '小さい頃、よくツクシ取ってたけどあれって一体何なんだろう';
            startNotifications({ tweet, setNotificationList, setTimeoutIdList });
          }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full __bg-blur">
              <div style={{ width: '1.2rem' }}>
                <CameraIcon fill="#fff" />
              </div>
            </div>
          </button>
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
      <TimeDisplay />
    </React.Fragment>
  );
}

export default App;
