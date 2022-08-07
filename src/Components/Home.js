import React from 'react'

const Home = () => {
    return (
        <div id='flex'>
            <div className="flex leanding">
                <div className="flex homeleft">
                  <div className="textbox">
                    <img className='googlecloud' src="https://cloudcommunitydays.in/img/google-cloud-india.09166173.png" alt="" />
                    <h1>Cloud Community Days 2022</h1>
                    <p>A community organized cloud conference with industry experts presenting on exciting topics! Cloud Community Day is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen.</p>
                    <h5>Organized By :</h5>
                    <img src="https://gdgcloud.kolkata.dev/ccd2022/static/media/logo.26ff8abf519779175358.png" alt="" />
                    <h6>Date: 25 septembur</h6>
                    <div className="flex button">
                        <button className='btn btn1'>Register Now</button>
                        <button className='btn btn2'>Become a Speaker</button>
                    </div>
                  </div>
                </div>
                <div className="homeright">
                    {/* <img src="https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?w=2000" alt="" /> */}
                    <img src="https://gdscwow.tech/static/media/main.642934a5.svg" alt="" />
                </div>
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