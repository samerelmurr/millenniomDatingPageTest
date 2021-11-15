/**
 * Main App.js file that contains main application.
 * 
 * Files imported: 
 *      App.css --- css file for bg animation
 *      Header.js --- Header Dating app
 *      DatingCards.js --- Dating cards for swiping 
 *      SwipeOption.js --- Contains swipping options 
 */

import './App.css';
import Header from './components/Header';
import DatingCards from './components/DatingCards.js';
import SwipeOption from './components/SwipeOption';

function App() {
  return (
    <div className="App">

      {/*Header*/}
      <Header />

      {/*Heart BG animation*/}
      <div className="animationBG">
        <ul className="Heart-Area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/*Swiping Dating Cards*/}
      <DatingCards />

      {/*Swipe option*/}
      <SwipeOption />
    </div>
  );
}

export default App;
