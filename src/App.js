import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";

import Home from './pages/Home';
import About from './pages/About';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route path="/" exact>
          { ({ match }) => <Home show={match !== null} /> }
        </Route>
        
        <Route path="/about">
          { ({ match }) => <About show={match !== null} /> }
        </Route>

        <Route path="/projects">
          { ({ match }) => <Projects show={match !== null} /> }
        </Route>

        <Route path="/contact">
          { ({ match }) => <Contact show={match !== null} /> }
        </Route>

        {/*<Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={1000} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        
         A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <h1>404</h1>
          </Route>
        </Switch>*/}
      </div>
    </Router>
  );
}
