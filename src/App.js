import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <header>
          <nav className="nav-bar">
            <button className="landing-button">
              <Link className="landing-link" to='/'>Landing</Link>
            </button>
            <button className="library-button">
              <Link className="library-link" to='/library'>Library</Link>
            </button>
          </nav>
        <h1 className="heading">Songbird</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <div className="footer">
		  	  <button className="linkedin-button"><a className="linkedin-link" href="https://www.linkedin.com/in/marcus-little-74781478/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
			    <button className="github-button"><a className="github-link" href="https://github.com/MarcusCole518" target="_blank" rel="noopener noreferrer">Github</a></button>
		    </div>
      </React.Fragment>
    );
  }
}

export default App;
