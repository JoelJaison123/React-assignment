import '../App.css';
import './Home.css';


import gridImg1 from '../images/gridImg1.jpg'
import gridImg2 from '../images/gridImg2.jpg'
import gridImg3 from '../images/gridImg3.jpg'
import gridImg4 from '../images/gridImg4.jpg'

import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

const startState = { autoAlpha: 0, opacity: 1};

export default function Home(props) {
  return (
  
    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.25, {
          autoAlpha: props.show ? 1 : 0,
         opacity: props.show ? 0 : 0,
          onComplete: done
        });
      }}
    >

      <div className="App">
        <div className="Home">
          <header>
            <h1>Hello!</h1>
            <h2>I'm Joel Jaison</h2>
            <h3>Welcome To My Design Portfolio</h3>
          </header>
        </div>
        <div className="area">
          <div className="scroll"></div>
        </div>
        <h4>Project Works</h4>
        <main className="projectGrid">
          <div className="grid-item">
            <div className="img__wrap">
              <img src={gridImg3} className="gridImg3" alt="project3" />
              <div className="img__description_layer">
                <p className="img__description">Visual Branding</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img__wrap">
              <img src={gridImg4} className="gridImg4" alt="project4" />
              <div className="img__description_layer">
                <p className="img__description">UX | UI</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img__wrap">
              <img src={gridImg2} className="gridImg2" alt="project2" />
              <div className="img__description_layer">
                <p className="img__description">3D art works</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img__wrap">
              <img src={gridImg1} className="gridImg1" alt="project1" />
              <div className="img__description_layer">
                <p className="img__description">Photoshop | Iluustrators</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Transition>
  );
}
