import React, { Component } from 'react';
import './Slider.css';
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import forth from './4.jpg';
import fifth from './5.jpg';



class Slider extends Component {
  render() {
    return (
      <div class="sliderbox">
        <div class="rimages">
          <div class="image-position">
            <a src='#'>
              <img alt="کارناوال | راهنمای سفر" src={first} />
            </a>
            <div className=" image-caption">
              <p>باغ گلشن طبس</p>
            </div>
          </div>
          <div class="image-position">
            <a src='#'>
              <img alt="کارناوال | راهنمای سفر" src={second} />
            </a>
            <div className=" image-caption">
              <p>سفارت آذربایجان و مراحل اخذ ویزای این کشور</p>
            </div>
          </div>
        </div>
        <div class="cimage">
          <div class="ccontant">
            <a src='#'>
              <img alt="کارناوال | راهنمای سفر" src={third} />
            </a>
            <div className=" image-caption">
              <p>بوستان باغ ایرانی تهران</p>
            </div>
          </div>
        </div>
        <div class="limages">
          <div class="image-position">
            <a src='#'>
              <img alt="کارناوال | راهنمای سفر" src={forth} />
            </a>
            <div className=" image-caption">
              <p>عمارت شاپوری شیراز</p>
            </div>
          </div>
          <div class="image-position">
            <a src='#'>
              <img alt="کارناوال | راهنمای سفر" src={fifth} />
            </a>
            <div className=" image-caption">
              <p>مرکز خرید پاویلیون کوالالامپور</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Slider;