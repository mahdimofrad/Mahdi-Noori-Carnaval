import React, { Component } from 'react';
import banner from './banner.jpg';
import './Banner.css'

class Banner extends Component {
  render() {
    return (
      <a href='#'>
        
           <div >
             <img className="mainbanner"  src={banner}/>
           </div>
        
      </a>
    );
  }
}

export default Banner;