import React from 'react';
import routes from './routes';
import './App.css';
import Home from './Components/Home/Home';
import Home2 from './Components/Home/Home2';
import Home3 from './Components/Home/Home3';
import Home4 from './Components/Home/Home4';

function App() {
  return (
    <div className="App">
      {routes}      
    </div>
  );
}

export default App;
