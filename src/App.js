import React, {useEffect} from 'react';
import logo from './images/brewdog-logo.png';
import './App.css';

import {connect} from "react-redux";
import {loadBeers} from "./redux/actions/beersActions";

function App({ loadBeers, beers }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchString, setSearchString] = React.useState('');

  useEffect(() => {
    loadBeers();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logo} alt="Brew Dog Logo"/>
        </div>
        <nav className="App-navigation">
          <div
              className="burger-bar"
              onClick={() => {
                setDrawerOpen(!drawerOpen)
              }}
          >
            <i className={`fa fa-${drawerOpen ? 'close' : 'bars'}`}></i>
          </div>
          <ul className="main-navigation">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <hr/>
      <section id="search-section">
        <div className="search-bar">
          <label>
            <input
                type="text"
                placeholder="Search..."
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
            />
            <button><i className="fa fa-search" /></button>
          </label>
        </div>
      </section>
      <hr/>
      <div className="seperator" />
      <hr/>
      <small>Click a beer below to find out more</small>
      <hr/>
      <div className="seperator" />
      <main id="beer-results">
        {
          console.log(beers)
        }
        <ul>
          {
            beers.map((beer, key) => (
                <li>
                  <div class="beer-button">
                    <div className="beer-name">
                      <h4>{beer.name}</h4>
                    </div>
                    <img src={beer.image_url} alt={beer.name}/>
                    <div className="seperator"/>
                    <hr/>
                  </div>
                </li>
            ))
          }
        </ul>
      </main>
      <aside id="drawer" className={drawerOpen ? 'open' : null}>
        <section className="drawer-section">
          <ul>
            <li className="drawer-title">
              <h2>Site Navigation</h2>
            </li>
            <li className="site-navigation">Home</li>
            <li className="site-navigation">About</li>
            <li className="site-navigation">Contact</li>
          </ul>
        </section>
        <footer className="drawer-footer">
          <section class="drawer-caption">
            <small>Created with love by Daniel Butterfield using the Brew Dog "PUNK API".</small>
          </section>
          <div className="drawer-footer-image-container">
            <img src={logo} alt=""/>
          </div>
          <small className="drawer-donation-text">
            If you like this app and love Brew Dog please
            make a donation below to Brew Dog for allowing
            me use their API.
          </small>
          <section className="donations-container">
            <ul>
              <li>
                <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle fill="#FFAD02" cx="19" cy="19" r="19"></circle>
                    <path d="M24.7 19.68a3.63 3.63 0 0 0 1.47-2.06c.74-2.77-.46-4.87-3.2-5.6l.89-3.33a.23.23 0 0 0-.16-.28l-1.32-.35a.23.23 0 0 0-.28.15l-.89 3.33-1.75-.47.88-3.32a.23.23 0 0 0-.16-.28l-1.31-.35a.23.23 0 0 0-.28.15l-.9 3.33-3.73-1a.23.23 0 0 0-.27.16l-.36 1.33c-.03.12.04.25.16.28l.22.06a1.83 1.83 0 0 1 1.28 2.24l-1.9 7.09a1.83 1.83 0 0 1-2.07 1.33.23.23 0 0 0-.24.12l-.69 1.24a.23.23 0 0 0 0 .2c.02.07.07.12.14.13l3.67.99-.89 3.33c-.03.12.04.24.16.27l1.32.35c.12.03.24-.04.28-.16l.89-3.32 1.76.47-.9 3.33c-.02.12.05.24.16.27l1.32.35c.12.03.25-.04.28-.16l.9-3.32.87.23c2.74.74 4.83-.48 5.57-3.25.35-1.3-.05-2.6-.92-3.48zm-5.96-5.95l2.64.7a1.83 1.83 0 0 1 1.28 2.24 1.83 1.83 0 0 1-2.23 1.3l-2.64-.7.95-3.54zm1.14 9.8l-3.51-.95.95-3.54 3.51.94a1.83 1.83 0 0 1 1.28 2.24 1.83 1.83 0 0 1-2.23 1.3z" fill="#FFF"></path>
                  </g>
                </svg>
                BTC
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg " width="38 " height="38 " viewBox="0 0 32 32 ">
                  <g fill="none " fill-rule="evenodd ">
                    <ellipse cx="16 " cy="16 " fill="#6F7CBA " rx="16 " ry="16 "></ellipse>
                    <path fill="#FFF " d="M10.13 17.76c-.1-.15-.06-.2.09-.12l5.49 3.09c.15.08.4.08.56 0l5.58-3.08c.16-.08.2-.03.1.11L16.2
          25.9c-.1.15-.28.15-.38 0l-5.7-8.13zm.04-2.03a.3.3 0 0 1-.13-.42l5.74-9.2c.1-.15.25-.15.34 0l5.77 9.19c.1.14.05.33-.12.41l-5.5
          2.78a.73.73 0 0 1-.6 0l-5.5-2.76z "></path>
                  </g>
                </svg>
                ETH
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg " width="38 " height="38 " viewBox="0 0 38 38 ">
                  <g fill="none " fill-rule="evenodd ">
                    <circle cx="19 " cy="19 " r="19 " fill="#B5B5B5 " fill-rule="nonzero "></circle>
                    <path fill="#FFF " d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58
          2.7-2.05.8-.9 4.34h8.1l-.99 3.8z "></path>
                  </g>
                </svg>
                LTC
              </li>
            </ul>
          </section>
        </footer>
      </aside>
    </div>
  );
}

const mapStateToProps = (state) => ({
  beers: state.beers
})

const mapActionsToProps = {
  loadBeers: loadBeers
}

export default connect(mapStateToProps, mapActionsToProps)(App);
