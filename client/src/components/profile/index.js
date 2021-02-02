import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Layout, Avatar, Row, Col } from "antd";
import { Bar } from "@ant-design/charts";
import { Skillbar,Languagebar } from "../index.js";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    const { Header, Content, Footer } = Layout;
    let hmain = {
      fontSize: "3vw",
      fontFamily: "thonburi,tahoma",
      textAlign: "center",
    };
    let lbmain = {
      fontSize: "2vw",
      fontFamily: "thonburi,tahoma",
      position: " relative",
      left: "15%",
    };
    let lbsec = {
      fontSize: "1vw",
      fontFamily: "thonburi,tahoma",
      position: " relative",
      left: "5%",
    };
    return (
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Avatar
          size={64}
          src="https://firebasestorage.googleapis.com/v0/b/reactnode-8c1eb.appspot.com/o/profile%2F144217573_127770892467677_3152386770290737802_n.jpg?alt=media"
          style={{ width: "10%", height: "20%", left: "45%" }}
        />
        <h1 style={hmain}>Chaiyoot Chaiyo</h1>
        <Row>
          <Col span={11}>
            <p style={lbmain}>Profile&Contact</p>
            <p style={lbsec}>Nickname : Moo </p>
            <p style={lbsec}>Birthday : 30 October 1997</p>
            <p style={lbsec}>
              Address : 20 Moo 2, Nong Lom Subdistrict, Hang Chat District,
              Lampang 52190
            </p>
            <p style={lbsec}>Mobile : 083-0929103</p>
            <p style={lbsec}>E-mail : moo.chayoot@gmail.com</p>
            <p style={lbsec}>FB : fb.com/mkolhj.fjdjg</p>
            <p style={lbsec}>Line : moo_shiro</p>
            <p style={lbsec}>Github : MooChayoot</p>
            <p style={lbmain}>Award</p>
            <p style={lbsec}>
              2019 : CompTIA IT Fundamentals Certification COMP001021472717
            </p>
            <p style={lbmain}>Language skill</p>
            <Languagebar></Languagebar>
          </Col>
          <Col span={1}></Col>
          <Col span={11}>
            <p style={lbmain}>Education</p>
            <p style={lbsec}>
              2016 - 2020 : Lampang Rajabhat University, Bachelor of Software
              Engineering GPA 2.50
            </p>
            <p style={lbsec}>
              2013 - 2016 : Triamudomsuksa Pattanakarn Khelangnakorn School,
              English-Thai-Social Program GPA 2.31
            </p>
            <p style={lbmain}>EXPERIENCE</p>
            <p style={lbsec}>
              2020 : Internship position Back-End Developer at Twin Synergy
              Co.,Ltd company for 4 months
            </p>
            <p style={lbmain}>Programming skill</p>
            <Skillbar></Skillbar>
          </Col>
        </Row>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
