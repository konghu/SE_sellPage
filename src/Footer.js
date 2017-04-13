/**
 * Created by Kong on 3/13/17.
 */

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return <div className="footerWarapper" style={{bottom: "0", height: "200px", width: "1440px", backgroundColor: "rgb(72, 77, 86)"}}>
      <div className="addressWrapper" style={{float: "left", paddingLeft: "200px", paddingTop: "30px", width:"150px"}}>
        <p style={{fontWeight: "bold", fontSize: "12px", color: "rgb(237, 241, 247)"}}>NY Auto Depot</p>
        <p style={{fontSize: "10px", color:"rgb(215, 217, 221)"}}>800-899-8233</p>
        <p style={{fontSize: "10px", color:"rgb(215, 217, 221)"}}>15 Windsor Ct, Mineola, NY</p>
        <p style={{fontSize: "10px", color:"rgb(215, 217, 221)"}}>Mon-Sun 10am-7am</p>
      </div>
      <div className="list1" style={{float: "left", width: "100px", paddingTop: "30px"}}>
        <ul style= {{listStyleType: "none"}} >
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)", paddingBottom: "15px"}}>Company</li>
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)", paddingBottom: "15px"}}>Jobs</li>
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)"}}>Blog</li>
        </ul>
      </div>
      <div className="list2" style={{float: "left", width: "100px", paddingTop: "30px"}}>
        <ul style= {{listStyleType: "none"}} >
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)", paddingBottom: "15px"}}>Terms of Service</li>
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)", paddingBottom: "15px"}}>Privacy Policy</li>
        </ul>
      </div>
      <div className="list3" style={{float: "left", width: "100px", paddingTop: "30px"}}>
        <ul style= {{listStyleType: "none"}} >
          <li style={{fontSize: "10px", color:"rgb(215, 217, 221)", paddingBottom: "15px"}}>Email Us</li>
          <img src="" alt="QR_code" />
        </ul>
      </div>
    </div>

  }
}
