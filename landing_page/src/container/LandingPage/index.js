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
import box_5_1 from '../../assets/box-5/bg.png'
import box_5_2 from '../../assets/box-5/3-d-model.png'
import box_5_3 from '../../assets/box-5/layout-25.png'
import box_6_1 from '../../assets/box-6/image.png'
import box_6_2 from '../../assets/box-6/shape.png'
import box_6_3 from '../../assets/box-6/tail-right.png'
import box_6_4 from '../../assets/box-6/tail-right-1.png'

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
                    <h1 className="second-box-heading mt-4">Built with Bootstrap 4</h1>
                    <h1 className="second-box-sub-heading mt-4">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</h1>
                </div>
                <div className="col-3 mt-5">
                    <img src={icon_3} />
                    <h1 className="second-box-heading mt-4">Fully Responsive</h1>
                    <h1 className="second-box-sub-heading mt-4">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</h1>
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

        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={box_5_1} height="650"/>
                </div>
                <div className="col-5 mt-3">
                    <h1 className="box-5-heading mt-5">Fits everything on all your devices.</h1>
                    <h1 className="box-5-sub-heading mt-4">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                    <div>
                    <span className="second-box-heading"><img src={box_5_2} className="m-3" />Faster Development UI Kits</span>
                    <h1 className="second-box-sub-heading col-8 mx-5">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</h1>
                    </div>
                    <div>
                    <span className="second-box-heading"><img src={box_5_3} className="m-3" />Pre-made Pages for Easy Setup</span>
                    <h1 className="second-box-sub-heading col-8 mx-5">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</h1>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-light">
        <img src={box_6_3} className="left-arrow"/>
        <img src={box_6_4} className="right-arrow"/>
            <div className="container mt-5 text-center mt-5">
                <h1 className="box-4-heading">Customers love us</h1>
                <h1 className="box-4-sub-heading">Create custom landing pages with Omega that converts</h1>
                <h1 className="box-4-sub-heading">more visitors than any website.</h1>
            </div>
            <div className="container w-75 text-center bg-white mt-5">
                
                <div className="row">
                    <div className="col-4">
                        <img src={box_6_1} height="300" className="my-1"/>
                    </div>
                    <div className="col-8">
                        <img src={box_6_2} className="mt-5"/>
                        <h1 className="customer-review mt-4 my-3">OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.</h1>
                        <h1 className="customer-review-name mt-5">Jonathan Taylor</h1>
                        <h1 className="customer-review-company">CEO at Creativex</h1>
                    </div>
                </div>
            </div>
            
            <div className="container w-75 mt-5">
                <div className="row">
                    <div className="col-4">
                        <h1 className="box-6-review-heading">1M+</h1>
                        <h1 className="box-4-sub-heading text-center">Customers visit Omega every month to get their service done.</h1>
                    </div>
                    <div className="col-4">
                        <h1 className="box-6-review-heading">92%</h1>
                        <h1 className="box-4-sub-heading text-center">Satisfaction rate comes from our awesome customers.</h1>
                    </div>
                    <div className="col-4">
                        <h1 className="box-6-review-heading">4.9/5.0</h1>
                        <h1 className="box-4-sub-heading text-center">Average customer ratings we have got all over internet.</h1>
                        <div className="mt-5"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-light mt-1">
            <div className="container text-center">
                <h1 className="box-4-heading">Pricing & Plans</h1>
                <h1 className="box-4-sub-heading">Create custom landing pages with Omega that converts</h1>
                <h1 className="box-4-sub-heading">more visitors than any website.</h1>
            </div>
            <div className="row price mt-4 w-25">
                <div className="col-4">
                    <span className="time">Monthly</span>
                </div>    
                <div className="col-4">
                    <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="time" for="flexSwitchCheckDefault">Yearly</label>
                </div>
                </div>
                    <div className="col-4">
                    <span className="save">Save 25%</span>
                </div>
            </div>
            
        </div>
        </>

    )
}

export default LandingPage
