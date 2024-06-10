import React, { Component } from 'react';
import "./About.css";
import vivian_profile_pic from "../assets/vivian_profile_pic.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={vivian_profile_pic}
                alt="Profile Pic"
              ></img>
            </div>
            </div>
              <div className="split right">
              <div className="centered">
              <div className="name_title">Vivian Liu</div>
              <div className="brief_description">
                Hi, I'm Vivian :&#41; I'm a rising third year at UC San Diego studying Computer Science and Finance.
                Outside of work, I like to travel, play badminton, dance, learn languages, and go window shopping (especially for food).
                Some fun facts about me: I'm on a 2,440 day Duolingo streak as of 6/9/24, and I can do all 3 splits!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
