import React from 'react'
import './index.css'
import top_box_image from '../../assets/top-box-img/bitmap.png'
import Navbar from '../../components/Navbar'

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
        <div className="row container">
                <div className="col-4 mt-5">
                    <h1 className="top-box-heading mt-5">Multiple Modern Layouts</h1>
                    <h1 className="top-box-sub-heading mt-4">Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</h1>
                    <button className="btn btn-lg top-box-button mt-4">Start 14 Days Free Trial</button>
                    <h1 className="top-box-button-sub-heading mt-2">No credit card required</h1>
                </div>
                <div className="col-4"><img src={top_box_image} className="top-box-img" /></div>
                <div className="col-4"><img src={top_box_image} className="top-box-img" /></div>
            </div>
        </div>
        </>
    )
}

export default LandingPage
