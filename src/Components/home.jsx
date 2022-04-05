import logo from '../burger.svg'; 
import '../App.css';
import React from 'react'; 

function Home() {
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Explore my flood blog
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          // rel="noopener noreferrer"
        > */}
          {/* Let's go */}
        {/* </a> */}
      </header>
    </div>
  );
}

export default Home;
