import React, { Component } from 'react';
import './Leftbox.css'
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import forth from './4.jpg';
import fifth from './5.jpg';
import sixth from './6.jpg';
import seven from './7.jpg';

class Leftbox extends Component {
  render() {
    return (
     <div className="leftbox">
        <a>
            <h4>
                Hd لمس طبیعت با کیفیت
            </h4>
        </a>
        <div>
            <a  src='#'>
                <img   src={first}/>
                <p>هزینه های سفر به رم</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={second}/>
                <p>معرفی و راهنمای انتخاب هاستل</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={second}/>
                <p>غذا در سفرهای بک پکینگ</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={third}/>
                <p>راهنمای مهاجرت به ترکیه</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={forth}/>
                <p>برنامه سفر 3 روزه به استانبول ویژه خرید</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={sixth}/>
                <p>اقامتگاه بوم گردی چیست ؟</p>
            </a>
        </div>
        <div>
            <a  src='#'>
                <img   src={seven}/>
                <p>آشنایی با امکانات نقشه گوگل</p>
            </a>
        </div>
      

     </div>
    );
  }
}

export default Leftbox;