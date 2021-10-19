import React from 'react';
import { Link } from 'react-router-dom';
import clinicBanner1 from '../../../images/1.jpg';
import clinicBanner2 from '../../../images/2.jpg';
import clinicBanner3 from '../../../images/3.jpg';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner"  >
                <div className="carousel-item active">
                    <img src={clinicBanner1} className="d-block w-100 opacity" alt="..." />
                    <div className="carousel-caption d-none d-md-block banner_blur" >
                        <h1 style={{color:'rgb(78 29 54 / 95%)'}} className="fw-bold">The Modern Dentistry <br /> You've Been Missing </h1>
                        <br />
                        <p style={{color:'rgb(78 29 54 / 100%)'}}>Our doctors are committed to helping you look , feel and smile your best.</p><br />

                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">ABOUT US </Link>
                        </button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={clinicBanner2} className="d-block w-100 opacity" alt="..." />
                    <div className="carousel-caption d-none d-md-block  banner_blur">
                        <h1 className="fw-bold" >We Offer Full-Scale <br /> Services You Need!</h1>
                        <br />
                        <p>If you are looking for a great place to smile look no further than Dental Clinic!</p><br />
                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/contacts">CONTACTS</Link>
                        </button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={clinicBanner3} className="d-block w-100 opacity" alt="..." />
                    <div className="carousel-caption d-none d-md-block banner_blur " >
                        <h1 style={{color:'rgb(155 78 175)'}} className="fw-bold">Complete Oral Health <br /> Starts Here and Now!</h1>
                        <br />
                        <p style={{color:'rgb(155 78 175)'}}>If you have any worries , concerns , or questions about visiting a dentist , please give us a call!</p><br />
                        <button className="btn btn bg-success">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">SIGN UP</Link>
                        </button>
                    </div>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden text-success" >Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;