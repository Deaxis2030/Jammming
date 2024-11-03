import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import Tracklist from './Tracklist';

function App() {
  return (
    <div>
      <header>
        Jamming
      </header>
      <body>
        <SearchBar/>
        <Tracklist/>
      </body>
    </div>
  );
}

export default App;
