import React from 'react'
import './index.css'
import top_box_image from '../../assets/top-box-img/bitmap.png'
import Navbar from '../../components/Navbar'
import icon_1 from '../../assets/box-2/layout-11.png'
import icon_2 from '../../assets/box-2/layers-3.png'
import icon_3 from '../../assets/box-2/icon.png'
import box_3_1 from '../../assets/box-3/logo-1.png'
import box_3_2 from '../../assets/box-3/logo-2.png'
import box_3_3 from '../../assets/box-3/logo-3.png'
import box_3_4 from '../../assets/box-3/logo-4.png'
import box_3_5 from '../../assets/box-3/logo-5.png'
import box_4_1 from '../../assets/box-4/bg.png'
import box_4_2 from '../../assets/box-4/path.png'

function LandingPage() {
    return (
        <>
        <div className="top-box">
            <Navbar />
            <div className="row container">
                <div className="col-6 mt-5">
                    <h1 className="top-box-heading mt-5">Get your next landing page.</h1>
                    <h1 className="top-box-sub-heading mt-4">Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                    <button className="btn btn-lg top-box-button mt-4">Start 14 Days Free Trial</button>
                    <h1 className="top-box-button-sub-heading mt-2">No credit card required</h1>
                </div>
                <div className="col-2"><img src={top_box_image} className="top-box-img" /></div>
            </div>
        </div>
        <div>
            <div className="row container justify-content-center mx-3">
                <div className="col-3 mt-5">
                    <img src={icon_1} />
                    <h1 className="second-box-heading mt-4">Multiple Modern Layouts</h1>
                    <h1 className="second-box-sub-heading mt-4">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</h1>
                </div>
                <div className="col-3 mt-5">
                    <img src={icon_2} />
                    <h1 className="second-box-heading mt-4">Multiple Modern Layouts</h1>
                    <h1 className="second-box-sub-heading mt-4">Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                </div>
                <div className="col-3 mt-5">
                    <img src={icon_3} />
                    <h1 className="second-box-heading mt-4">Multiple Modern Layouts</h1>
                    <h1 className="second-box-sub-heading mt-4">Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                </div>
            </div>
        </div>
        <div>
            <div className="row container justify-content-center mt-5 mx-5">
                <div className="col-2 mt-5">
                    <img src={box_3_1} />
                </div>
                <div className="col-2 mt-5">
                    <img src={box_3_2} />
                </div>
                <div className="col-2 mt-5">
                    <img src={box_3_3} />
                </div>
                <div className="col-2 mt-5">
                    <img src={box_3_4} />
                </div>
                <div className="col-2 mt-5">
                    <img src={box_3_5} />
                </div>
            </div>
        </div>
        <div className="bg-light mt-5">
        <div className="box-4 w-100 mx-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <h1 className="box-4-heading mx-5 mt-5">Make beautiful landing pages easily.</h1>
                    <h1 className="box-4-sub-heading mx-5 mt-4">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                    <div>
                    <span className="box-4-sub-sub-heading mx-5"><img src={box_4_2} className="m-2 box-4-check" />50+ HTML Elements</span>
                    <span className="box-4-sub-sub-heading mx-4"><img src={box_4_2} className="m-2 box-4-check" />Bootstrap 4 Framework</span>
                    </div>
                    <div>
                    <span className="box-4-sub-sub-heading mx-5"><img src={box_4_2} className="m-2 box-4-check" />6 Month Support</span>
                    <span className="box-4-sub-sub-heading mx-5"><img src={box_4_2} className="m-2 box-4-check" />Lifetime Updates</span>
                    </div>
                </div>
                <div className="col-6">
                    <img src={box_4_1} height="600"/>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default LandingPage
