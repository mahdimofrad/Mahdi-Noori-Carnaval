import React, { Component } from 'react';
import './Rightimg.css'
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import forth from './4.jpg';
import fifth from './5.jpg';
import sixth from './6.jpg';
import seven from './7.jpg';
import eight from './8.jpg';
import nine from './9.jpg';
import ten from './10.jpg';

class Rightimg extends Component {
    render() {
        return (
            <div className="right-img">
                <a>
                    <h4>
                        تصاویر شگفت انگیز از سراسر جهان
                    </h4>
                </a>
                <div >
                    <a src='#'>
                        <img src={first} />
                        <div className="right-ing-caption">
                            <h3>سفر به هامبورگ</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>گشتی متفاوت در آلمان</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img src={second} />
                        <div className="right-ing-caption">
                            <h3>آرامگاه شاه نعمت الله ولی کرمان</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>مدفن عارف مشهور ایرانی</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={third} />
                        <div className="right-ing-caption">
                            <h3>گشتی در افغانستان</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>سرزمین کمتر دیده شده</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={forth} />
                        <div className="right-ing-caption">
                            <h3>کاخ نیاوران تهران</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>خانه مجلل پهلوی ها</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={fifth} />
                        <div className="right-ing-caption">
                            <h3>طبیعت گردی در کانادا</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>دغدغه های خود را فراموش کنید</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img src={sixth} />
                        <div className="right-ing-caption">
                            <h3>هزینه های سفر به استانبول</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>بروزرسانی بهار 2019</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={seven} />
                        <div className="right-ing-caption">
                            <h3>ویدیو تایم لپس از جزیره بالی</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>اندونزی زیبایی های بسیاری دارد</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={eight} />
                        <div className="right-ing-caption">
                            <h3>سی و سه پل اصفهان</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>پل تاریخی زاینده رود</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img src={nine} />
                        <div className="right-ing-caption">
                            <h3>ویدیو هوایی از مسکو</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>پرواز بر فراز پایتخت روسیه</p>
                        </div>

                    </a>
                </div>
                <div>
                    <a src='#'>
                        <img  src={ten} />
                        <div className="right-ing-caption">
                            <h3>دریاچه چورت ساری</h3>
                        </div>
                        <div className="right-ing-caption">
                            <p>شاهکار هنرمندانه زلزله</p>
                        </div>

                    </a>
                </div>

            </div>

        );
    }
}

export default Rightimg;