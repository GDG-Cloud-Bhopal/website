import React from 'react'

const Home = () => {
    return (
        <div id='flex Home'>
            <div className="flex leanding">
                <div className="flex homeleft">
                  <div className="textbox">
                    <h1>Cloud Community Days 2022</h1>
                    <p>A community organized cloud conference with industry experts presenting on exciting topics! Cloud Community Day is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen.</p>
                    <h5>Organized By :</h5>
                    <img src="" alt="" />
                    <h5>Date: 25 septembur</h5>
                    <div className="flex button">
                        <button className='btn btn1'>Register Now</button>
                        <button className='btn btn2'>Become a Speaker</button>
                    </div>
                  </div>
                </div>
                <div className="homeright"></div>
            </div>
            <div className="bottem">
                <h2>Hello, CCD22</h2>
                <p>We’re bringing you an opportunity to learn about Cloud Technology and Google Cloud Certifications from the industry experts at the Cloud Community Day India 2022. Our experts will tell you how Google Cloud Platform and Google Cloud Certifications can help you in accelerating your career by boosting your knowledge. During this 2 days event, you’ll also stand a chance to win exciting prizes and heavy discounts coupons on Google Cloud Certifications.</p>
                <button className='btn btn3'>Learn More</button>
            </div>
        </div>
    )
}

export default Home