import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

export default function Number() {
  const [animateNumbers, setAnimateNumbers] = useState(false);

  const handleEnter = () => {
    setAnimateNumbers(true);
  };

  return (
    <>
      <section className="number-sec section-padding">
        <div className="container">
          <div className="sec-head text-center mb-80">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9">
                <h6 className="sub-title main-color">Fun Facts</h6>
                <h3>
                  Pleasure in the job puts perfection <br /> in the work.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="item sm-mb50">
                <InsertEmoticonOutlinedIcon
                  sx={{
                    fontSize: "70px",
                    marginBottom: "40px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    color: "gray",
                  }}
                ></InsertEmoticonOutlinedIcon>
                <h3 className="">
                  {animateNumbers && (
                    <CountUp end={2400} delay={0} duration={2} />
                  )}
                </h3>
                <p
                  className="wow txt"
                  data-splitting
                  style={{
                    fontWeight: "bold ",
                    color: "gray",
                    fontSize: "15px",
                  }}
                >
                  People who are committed to their management tasks.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item sm-mb50">
                <CardGiftcardOutlinedIcon
                  sx={{
                    fontSize: "70px",
                    marginBottom: "40px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    color: "gray",
                  }}
                ></CardGiftcardOutlinedIcon>
                <h3 className="">
                  {animateNumbers && (
                    <CountUp end={133} delay={0} duration={2} />
                  )}
                </h3>
                <p
                  className="wow txt"
                  data-splitting
                  style={{
                    fontWeight: "bold ",
                    color: "gray",
                    fontSize: "15px",
                  }}
                >
                  Signed projects that have been confirmed complete!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <WorkspacePremiumOutlinedIcon
                  sx={{
                    fontSize: "70px",
                    marginBottom: "40px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    color: "gray",
                  }}
                ></WorkspacePremiumOutlinedIcon>
                <h3 className="">
                  {animateNumbers && (
                    <CountUp end={46} delay={0} duration={2} />
                  )}
                </h3>
                <p
                  className="wow txt"
                  data-splitting
                  style={{
                    fontWeight: "bold ",
                    color: "gray",
                    fontSize: "15px",
                  }}
                >
                  International awards and cups for design projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Waypoint onEnter={handleEnter} />
    </>
  );
}
