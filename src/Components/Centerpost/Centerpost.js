import React, { Component } from 'react';
import './Centerpost.css'
import first from './1.jpg';


class Centerpost extends Component {
  render() {
   
    return (
      <div className="center-post">
        <div>
          <a src='#'>
            <img src={first} />

          </a>
        </div>
        <div className="center-post-btn">
          <div>
            <span className="post-btn">اخبار گردشگری</span>

          </div>
          <div className="post-caption">
            <a src="#">
              <p>شرایط دریافت ارز دانشجویی در سال 98 مشخص شد</p>
            </a>
          </div>
          <div className="post-preview-text">
            <p>دکتر مجتبی صدیقی -رییس سازمان امور دانشجویان وزارت علوم- از تعیین تکلیف نهایی ارز دانشجویی در شش ماهه اول سال ۹۸ و محاسبه نرخ ارز به صورت شناور خبر داد...</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Centerpost;