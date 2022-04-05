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
      </header>
    </div>
  );
}

export default Home;
