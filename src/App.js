import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import Slider from './Components/Slider/Slider';
import Leftbox from './Components/Leftbox/Leftbox';
import Rightbox from './Components/Rightbox/Rightbox';
import Centerbox from './Components/Centerbox/Centerbox';
import Centerpost from './Components/Centerpost/Centerpost';
import Rightimg from './Components/Rightimg/Rightimg';


class App extends Component {
  render() {
    return (

      <div className="asli">
        <Header />
        <Nav />
        <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
          <Slider />
          <Banner />
          <div style={{ width: "98%",  height: 5 }}></div>
          <Leftbox />
          <Centerbox/>
          <Rightbox/>
          <Rightimg/>
          <Centerpost/>
          <Centerpost/>
          <Leftbox />
          <Centerbox/>
          <Centerbox/>
          
        </div>
        
      </div>
      
    );
  }
}

export default App;
