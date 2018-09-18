import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Portfolio from '../../components/Portfolio/Portfolio';

function Home(){
  return (
    <div className="Home">
      <NavBar/>
      <Portfolio/>
    </div>
  );
}

export default Home;