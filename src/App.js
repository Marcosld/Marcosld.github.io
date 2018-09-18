import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home';

function App(){
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/AISimulation" component={() => window.location.href = "https://marcosld.github.io/AISimulation/"} />
    </div>
  );
}

export default App;
