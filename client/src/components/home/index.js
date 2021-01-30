import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    Profile
} from '../index.js';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  async componentDidMount() {
    console.log(process.env); 
      
    let a = `${process.env.REACT_APP_AK}`
    console.log(a);
  }
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div id="main-content">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={[`1`]}>
              <Menu.Item key="1" >ประวัติ</Menu.Item>
              <Menu.Item key="2" >nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <a style={{float:"right"}}>Register</a>
              <label style={{float:"right"}}>&nbsp;/&nbsp;</label>
              <a style={{float:"right"}}>Login</a>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <Profile></Profile>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
