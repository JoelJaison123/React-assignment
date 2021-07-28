import '../App.css';
import './Contact.css';

import form from '../images/form.png';

import { Transition } from 'react-transition-group';
import { TweenMax } from 'gsap/all';

const startState = { autoAlpha: 0, x: 50};

export default function Contact(props) {
  return (
    
      // GSAP transition
    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          x: props.show ? 0 : 50,
          onComplete: done
        });
      }}
    >

     
      <div className="App">    
        <header className="Contact">
          <h1 className="Txt"><img src={form} className="icon-form" alt="formicon" />Contact Me!</h1>
        </header>
        <main>
        <form>
            <div className="firstBox">
              <label>
                <input name="name" type="text" className="feedback-input" placeholder="First Name" id="name" />
              </label>
              <label>
                <input name="name" type="text" className="feedback-input" placeholder="Last Name" id="name" />
              </label>
              <label>
                <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
              </label>
              <label>
                <textarea name="text" className="feedback-input" id="comment" placeholder="Come Say Hi.."></textarea>
              </label>
            </div>
            <div className="submit">
              <input type="submit" value="SUBMIT" id="button-blue" />
            </div>
          </form>
        </main>
      </div>
    </Transition>
  );
}