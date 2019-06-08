import React, { Component } from 'react';
import './Centerbox.css'
import first from './1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleLeft, faLocationArrow, faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons'


class Centerbox extends Component {
    render() {
        const element = <FontAwesomeIcon icon={faAngleLeft} />
        const element1 = <FontAwesomeIcon icon={faLocationArrow} />
        const calendar = <FontAwesomeIcon icon={faCalendar} />
        const time = <FontAwesomeIcon icon={faTimes} />


        return (
            <div className="center-box">
                <div className="center-box-element">
                    <div className="btn-div">
                        <span className="btn-green">اماکن و بناهای تاریخی ایران</span>
                    </div>
                    <div className="caption-div">
                        <span className="caption-text">کلیسای کانتور قزوین | کوچک ترین کلیسای ایران</span>
                    </div>
                    <div className="location-box">
                        <span>آسیا</span>
                        {element}

                        <span>ایران</span>
                        {element}

                        <span> استان قزوین</span>
                        {element}

                        <span>قزوین</span>
                        {element1}

                    </div>
                    <img src={first} />
                    <p>با کارناوال همراه باشید تا شما را با کلیسای کانتور قزوین آشنا کنیم؛ بنایی سرخ که زمانی عبادتگاهی برای روس ها بود و حالا در سکوتی عمیق فرو رفته است. با هم به گذشته می رویم و تاریخچه کلیسای کانتور قزوین را مرور می کنیم و نگاهی هم به معماری این بنای تماشایی داریم. آدرس کلیسای کانتور قزوین را هم به شما می دهیم تا در سفرتان به این شهر برای دیدنش برنامه ریزی کنید. همراه ما به شهری بیایید که زمانی پایتخت شاهان صفوی...</p>
                    <div className="btn-div">
                        <span className="btn-green">ادامه مطلب</span>
                    </div>
                    <div>

                        <div >
                            <ul>
                                <li>{time} 13:30 </li>
                                <li>{calendar} 14 خرداد ۱۳۹۸ </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Centerbox;