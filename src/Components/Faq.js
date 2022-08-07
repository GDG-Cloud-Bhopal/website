import React from "react";

const Faq = () => {
  return (
    <div id="Faq">
      <div className="faqtaxt">
        <h2>FAQ</h2>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>
          Lorem ipsum dolor sit amet consecteturamet consectetur adipisicing
          elit. Ipsum, impedit doloremque vel dolorum excepturi eum placeat
          omnis et aperiam eligendi.
        </p>
      </div>
      <div className="accordianbox">
           <div className="accordian">
        <div>
          <input type="checkbox" name='faq' className='acordianinput' id='accordian1' />
          <label htmlFor="accordian1" className='accordianlable'>section 1</label>
          <div className="accordiancontent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam id labore sint perferendis expedita consequatur alias earum sapiente delectus.</p>
          </div>
        </div>
        <div>
          <input type="checkbox" name='faq' className='acordianinput' id='accordian2' />
          <label htmlFor="accordian2" className='accordianlable'>section 2</label>
          <div className="accordiancontent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam id labore sint perferendis expedita consequatur alias earum sapiente delectus.</p>
          </div>
        </div>
        <div>
          <input type="checkbox" name='faq' className='acordianinput' id='accordian3' />
          <label htmlFor="accordian3" className='accordianlable'>section 3</label>
          <div className="accordiancontent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam id labore sint perferendis expedita consequatur alias earum sapiente delectus.</p>
          </div>
        </div>
        <div>
          <input type="checkbox" name='faq' className='acordianinput' id='accordian4' />
          <label htmlFor="accordian4" className='accordianlable'>section 4</label>
          <div className="accordiancontent">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam id labore sint perferendis expedita consequatur alias earum sapiente delectus.</p>
          </div>
        </div>
      </div>
      </div>

     
    </div>
  );
};

export default Faq;
