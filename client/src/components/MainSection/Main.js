import React from 'react'
import Footer from '../Footer/Footer'
import CarouselSlider from './Carousel/Carousel'
import './Main.css'

function Main() {
    return (
        <div className="main-container">
        <section className="main">
        <div class="container">
              <div className="text">
              <h1>Build your Team with Coursify</h1>
              <p>No more juggling recruiment,Coursify provides best candiates at one place</p>
              <button className="btn">Hire Now</button>
              </div>
              <div>
                  <img src="Images/main.jpg" alt="img" />
              </div>
        </div>
        </section>
        <section className="companies">
            <h1>Trusted by some of the world's best companies</h1>
            <div className="table">
                <img src="Images/comp1.png" alt="img"/>
                <img src="Images/comp2.png" alt="img"/>
                <img src="Images/comp3.png" alt="img"/>
                <img src="Images/comp4.png" alt="img"/>
                <img src="Images/comp5.png" alt="img"/>
                <img src="Images/comp6.png" alt="img"/>
                <img src="Images/comp7.png" alt="img"/>
            </div>
        </section>
        <section className="stats">
             <h1>Why you should choose us</h1>
             <div className="stats-container">
                <div className="stats-data">
                    <img src="/Images/stats1.svg"/>
                    <h2>Trusted by 100+ Companies</h2>
                    <p>Companies like Uber,Zomato,Razorpay and many more</p>
                </div>
                <div className="stats-data">
                    <img src="/Images/stats2.svg"/>
                    <h2>Best Profile Candiates</h2>
                    <p>Provides highly best-in Industry candiates</p>
                </div>
                <div className="stats-data">
                    <img src="/Images/stats3.svg"/>
                    <h2>Trusted & Secure</h2>
                    <p>Secure and Trusted Recuriting Systems</p>
                </div>
             </div>
        </section>
        <div className="portfolio">
            <CarouselSlider />
        </div>
        <section className="container details">
            <div className="text1">
            <h1>We discover candidates you actually want to talk to.</h1>
            <p>
            Dover uses a robust calibration process to deeply understand your requirements.
            </p>
            <br/>
            <p>Then, our system evaluates prospective candidates on <b>50+data points
</b> so we can find qualified candidates who are the best possible fits.</p>
            </div>
            <div>
                <img src="Images/sample.png" />
            </div>
        </section>
        <footer><Footer /></footer>
        </div>
    )
}

export default Main
