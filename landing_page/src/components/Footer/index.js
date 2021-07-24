import React from 'react'
import twitter from "../../assets/logo-twitter/logo-twitter-2-x.png"
import facebook from "../../assets/logo-fb-simple-2-x_2021-07-24/logo-fb-simple-2-x.png"
import google from "../../assets/google-2-x_2021-07-24/google-2-x.png"
import './index.css'

function Footer() {
    return (
        <div>
            <footer className="main container py-5 w-75">
                <div className="row">
                    <div className="col-3 col-md">
                    <h5 className="omega">Omega</h5>
                    <ul className="list-unstyled text-small">
                        <h2 className="omega-subheading mt-3">With lots of unique blocks, you can easily buildpage without coding.</h2>
                        <div className="d-flex">
                            <img src={twitter} alt="social logo" width="24" height="24" className="d-block mb-2 bg-secondary social-logo m-1" ></img>  
                            <img src={facebook} alt="social logo" width="24" height="24" className="d-block mb-2 bg-secondary social-logo m-1" ></img>       
                            <img src={google} alt="social logo" width="24" height="24" className="d-block mb-2 bg-secondary social-logo m-1" ></img>       
                        </div>
                    </ul>
                    </div>
                    <div className="col-2 col-md">
                    <h5 className="heading">About</h5>
                    <ul className="list-unstyled text-small">
                        <h6 className="link mt-4">Our mission</h6>
                        <h6 className="link">Our story</h6>
                        <h6 className="link">Team Members</h6>
                    </ul>
                    </div> 
                    <div className="col-2 col-md">
                    <h5 className="heading">Learn</h5>
                    <ul className="list-unstyled text-small">
                        <h6 className="link mt-4">Tutorials</h6>
                        <h6 className="link">How  it works</h6>
                        <h6 className="link">F.A.Q</h6>
                    </ul>
                    </div>
                    <div className="col-2 col-md">
                    <h5 className="heading">Stories</h5>
                    <ul className="list-unstyled text-small">
                        <h6 className="link mt-4">Blog</h6>
                        <h6 className="link">Tech stories</h6>
                    </ul>
                    </div>
                    <div className="col-2 col-md">
                    <h5 className="heading">Contact Us</h5>
                    <ul className="list-unstyled text-small">
                        <h6 className="link-contact mt-4">support@grayic.com</h6>
                        <h6 className="link-contact">+133-394-3439-1435</h6>
                    </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
