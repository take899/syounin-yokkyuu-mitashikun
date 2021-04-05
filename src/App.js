import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';


// 昇降する丸
const Slide = ({ show, ...callBack }) => (
  <CSSTransition
    in={show}
    timeout={400}
    unmountOnExit
    classNames="pop__slide-"
    {...callBack}
  >
    <div className="pop__slide"></div>
  </CSSTransition>
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuModalOpen: false
    };
  }
 
  render() {
    const {
      MenuModalOpen
    } = this.state;
    return (
      <React.Fragment>
        <CSSTransition
          in={MenuModalOpen}
          timeout={200}
          unmountOnExit
          classNames={{
            enter: 'modal-menu',
            enterActive: 'modal-menu is-active',
            enterDone: 'modal-menu is-active',
            exit: 'modal-menu',
            exitActive: 'modal-menu',
            exitDone: 'modal-menu',
          }}
        >
          <div>
            <div
              className="absolute w-screen h-screen bg-white"
              onClick={() => this.setState({ MenuModalOpen: false })}
            />            
            <div className="absolute w-screen card">
              <div className="max-w-screen-lg p-5 mx-auto bg-gray-100 border-4 border-gray-500 rounded-2xl">
                <div>モーダルを開きました</div>
                <button onClick={() => this.setState({ MenuModalOpen: false }) }>閉じる</button>
              </div>
            </div>
          </div>
        </CSSTransition>
        <button onClick={() => this.setState({ MenuModalOpen: true }) }>開く</button>
      </React.Fragment>
    );
  }
}

export default App;
