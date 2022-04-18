import React from "react";
import img from "../../images/img.png";
const About = () => {
  
  return (
    <div className="d-flex align-items-center justify-content-center container gap-4">
      <div className="col-lg-5">
        <img src={img} alt="" />
      </div>
      <div className="col-lg-7">
        <h1 className="fw-bold ">
          Hi I am <span className="text-warning">Aazmi Habib</span>
        </h1>
        <h5 className="mt-4">
          Professional photographer of Bangladesh. I will click your wedding
          photos and also your wild life photos you want.
        </h5>
        <button className="mt-4 fw-bold btn btn-warning">Hair Me</button>
      </div>
    </div>
  );
};

export default About;
