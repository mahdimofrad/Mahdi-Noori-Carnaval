import React, { Component } from 'react';
import mainlogo from './site-logo.jpg';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'



class Nav extends Component {
  render() {
    const lock = <FontAwesomeIcon style={{ fontSize: 12, marginLeft: 5 }} icon={faLock} />
    const faUserPlus = <FontAwesomeIcon icon={faUserPlus} />
    return (
      <nav>
        <div className="main-logo">
          <a src='#'>
            <img  src={mainlogo} />
          </a>
        </div>
        <div class="menu-search">
          <div className="search-box">

            <p contenteditable="true">
              جستجوی شهر، کشور ، جاذبه گردشگری و ...
             
            </p>
          </div>
          <div className="menu-section">
            <ul>
              <li><a href='#'>گردشگری</a>
                <ul>
                  <li>هیجانی و ماجراجویانه</li>
                  <li>اماکن تاریخی</li>
                  <li>اماکن اسرارآمیز</li>
                  <li>مراکز خرید</li>
                  <li>میراث جهانی یونسکو</li>
                  <li>بوم گردی</li>
                  <li>اماکن مقدس</li>
                  <li>رستوران</li>
                  <li>اقامت</li>
                  <li>تفریحات ورزشی</li>
                  <li>برترینها</li>
                </ul>
              </li>
              <li><a href='#'>طبیعت گردی</a>
                <ul>
                  <li>آبشار</li>
                  <li>دریاچه</li>
                  <li>کوهستان</li>
                  <li>جنگل</li>
                  <li>ییلاقات</li>
                  <li>چشمه آب گرم و معدنی</li>
                  <li>دشت و بیابان</li>
                  <li>غار</li>
                  <li>ساحل و جزیره</li>
                  <li>پارک</li>
                </ul>
              </li>
              <li><a href='#'>ایران گردی</a>
                <ul>
                  <li>طبیعت ایران</li>
                  <li>تاریخ ایران</li>
                  <li>فرهنگ ایران</li>
                  <li>تهرانگردی</li>
                  <li>سوغات وصنایع دستی</li>
                  <li>غذاهای ایرانی</li>
                  <li>روستاهای ایران</li>
                  <li>موزه های ایرن</li>
                  <li>گزارش کارناوال</li>
                  <li>ایران از نگاه گردشگران خارجی</li>
                </ul>
              </li>
              <li><a href='#'>جهان گردی</a>
                <ul>
                  <li>آسیا</li>
                  <li>آمریکا</li>
                  <li>اروپا</li>
                  <li>آفریقا</li>
                  <li>اقیانوسیه</li>
                </ul>
              </li>
              <li><a href='#'>راهنمای سفر</a>
                <ul>
                  <li>راهنمای جامع سفر</li>
                  <li>معرفی شهر های توریستی</li>
                  <li>برنامه سفر</li>
                  <li>هزینه های سفر</li>
                  <li>نکات ضروری سفر</li>
                  <li>راهنمای اخذ ویزا از سفارت ها</li>
                  <li>قوانین فرودگاهی</li>
                </ul>
              </li>
              <li><a href='#'>فصل سفر</a>
                <ul>
                  <li>چهار فصل</li>
                  <li>بهار</li>
                  <li>تابستان</li>
                  <li>پاییز</li>
                  <li>زمستان</li>
                </ul>
              </li>
              <li><a href='#'>فرهنگ ملل</a>
                <ul>
                  <li>جشنواره های جهانی</li>
                  <li>مردم شناسی و آداب و رسوم</li>
                  <li>سوغات ملل</li>
                  <li>خوشمزه های جهان</li>
                  <li>هنر و موسییق اقوام و ملل</li>
                </ul>
              </li>
              <li><a href='#'>عصر نوین</a>
                <ul>
                  <li>سفر های فضایی</li>
                  <li>محیط زیست</li>
                  <li>تکنولوژِی در گردشگری</li>
                </ul>
              </li>
              <li><a href='#'>آموزش</a>
                <ul>
                  <li>مقالات آموزشی</li>
                  <li>مهاجرت</li>
                  <li>آموزش عکاسی</li>
                  <li>دانشنامه گردشگری</li>
                  <li>مشاهیر گردشگری</li>
                </ul>
              </li>
              <li><a href='#'>نیم نگاه</a><ul>
                <li>عکاسی در سفر</li>
                <li>جالب انگیز</li>
                <li>عکس روز نشنال جءوگرافیک</li>
                <li>حیات وحش</li>
                <li>نگاهی به تاریخ</li>
                <li>گنجینه تاریخ</li>
                <li>معماری</li>
                <li>صدای زندگی</li>
                <li>رویدادها</li>
                <li>گردشگری در گینس</li>
                <li>اخبار گردشگری</li>
              </ul>
              </li>
              <li className="video-btn">

                <p>
                  HD ویدیو
                </p>

              </li>
            </ul>
          </div>
        </div>
        <div class="login-signup">
            
          <button class="login_btn">
            ورود
                {lock}
          </button>
          <button class="signup_btn">
            عضویت
                {faUserPlus}

          </button>
        </div>
      </nav>

    );
  }
}
export default Nav;