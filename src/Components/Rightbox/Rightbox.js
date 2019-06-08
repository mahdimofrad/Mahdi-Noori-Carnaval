import React, { Component } from 'react';
import './Rightbox.css'
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';
import forth from './4.jpg';
import fifth from './5.jpg';
import sixth from './6.jpg';
import seven from './7.jpg';

class Rightbox extends Component {
    render() {
        return (
            <div className="right-box">
                <a>
                    <h4>
                        طبیعت بکر ایران زمین
            </h4>
                </a>
                <div className="right-post">
                    <div className="right-post-elements">
                        <span > طبیعت ایران</span>
                        <p>پارک آبی سیام اسپانیا</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={first} />
                        </a>
                    </div>


                </div>
                <hr />

                <div className="right-post">
                    <div className="right-post-elements">
                        <span>طبیعت ایران</span>
                        <p>جنگل الیمستان</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={second} />
                        </a>
                    </div>


                </div>
                <hr />

                <div className="right-post">
                    <div className="right-post-elements">
                        <span>طبیعت ایران</span>
                        <p>جنگل شروود انگلستان</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={third} />
                        </a>
                    </div>


                </div>
                <hr />

                <div className="right-post">
                    <div className="right-post-elements">
                        <span>طبیعت ایران</span>
                        <p>روستای لافت قشم</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={forth} />
                        </a>
                    </div>


                </div>
                <hr />

                <div className="right-post">
                    <div className="right-post-elements">
                        <span >طبیعت ایران</span>
                        <p>کلیسای سرکیس مقدس تهران</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={fifth} />
                        </a>
                    </div>


                </div>
                <hr />

                <div className="right-post">
                    <div className="right-post-elements">
                        <span>طبیعت ایران</span>
                        <p>کوه های مریخی چابهار</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={sixth} />
                        </a>
                    </div>


                </div>
                <hr />
                <div className="right-post">
                    <div className="right-post-elements">
                        <span >طبیعت ایران</span>
                        <p>موزه ارتباطات تهران</p>
                        <a>۱۳۹۶/۰۳/۱۷ ۱۰:۳۰</a>
                    </div>
                    <div className="right-post-elements">
                        <a src='#'>
                            <img src={seven} />
                        </a>
                    </div>


                </div>

            </div>
        );
    }
}

export default Rightbox;