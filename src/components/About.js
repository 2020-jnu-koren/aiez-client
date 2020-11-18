import React from "react";
import img1 from "./img/aa/a1.PNG";
import img2 from "./img/aa/a2.PNG";
import img3 from "./img/aa/a3.PNG";
import img4 from "./img/aa/a4.PNG";
import img5 from "./img/aa/a5.PNG";
import img6 from "./img/aa/a6.PNG";
import img7 from "./img/aa/a7.PNG";
import img8 from "./img/aa/a8.PNG";
import img9 from "./img/aa/a9.PNG";
import img10 from "./img/aa/a10.PNG";
import img11 from "./img/aa/a11.PNG";
import img12 from "./img/aa/a12.PNG";
import img13 from "./img/aa/a13.PNG";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__center">
            <div className="header__title">Guide</div>
          </div>
        </header>
        <main>
          <div className="about_main">
            <div className="about_1">
              <div className="guide">
                <div className='guide_txt'>1</div>
                <img id="guide_img" src={img1}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>2</div>
                <img id="guide_img" src={img2}></img>
              </div>
            </div>
            <div className="about_2">
              <div className="guide">
                <div className='guide_txt'>3</div>
                <img id="guide_img" src={img3}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>4</div>
                <img id="guide_img" src={img4}></img>
              </div>
            </div>
            <div className="about_3">
              <div className="guide">
                <div className='guide_txt'>5</div>
                <img id="guide_img" src={img5}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>6</div>
                <img id="guide_img" src={img6}></img>
              </div>
            </div>
            <div className="about_4">
              <div className="guide">
                <div className='guide_txt'>7</div>
                <img id="guide_img" src={img7}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>8</div>
                <img id="guide_img" src={img8}></img>
              </div>
            </div>
            <div className="about_5">
              <div className="guide">
                <div className='guide_txt'>9</div>
                <img id="guide_img" src={img9}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>10</div>
                <img id="guide_img" src={img10}></img>
              </div>
            </div>
            <div className="about_6">
              <div className="guide">
                <div className='guide_txt'>11</div>
                <img id="guide_img" src={img11}></img>
              </div>
              <div className="guide">
                <div className='guide_txt'>12</div>
                <img id="guide_img" src={img12}></img>
              </div>
            </div>
            <div className="about_7">
              <div className="guide">
                <div className='guide_txt'>13</div>
                <img id="guide_img" src={img13}></img>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
