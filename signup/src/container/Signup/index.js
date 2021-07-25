import React from 'react'
import Navbar from '../../component/Navbar'
import './index.css'
import * as yup from 'yup'

function Signup() {
    return (
        <>
        <div className="main-container">
        <Navbar />
        <div className="container w-50 main" >
            <h1 className="text-center main-heading">Sign Up</h1>
            <p className="text-center sub-heading mt-3">No credit card required</p>
            <form>
                <div className="m-3">
                   <input type="email" className="form-control input-field" placeholder="Email address"  aria-describedby="emailHelp"/>
                </div>
                <div className="m-3">
                   <input type="text" className="form-control input-field"  placeholder="Company name"/>
                </div>
                <div className="m-3">
                   <input type="password" className="form-control input-field" placeholder="Password"/>
                </div>
                <div className="m-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label i-agree">I agree to the <span className="iagree-terms">Terms & Conditions</span></label>
                </div>
                <div className="text-center"><button type="submit" className="submit-button">Get Started</button></div>
            </form>
            <p className="text-center i-agree mt-3">Already have an account? <span className="iagree-terms">Sign in</span></p>
        </div>
        </div>
        </>
    )
}

export default Signup
