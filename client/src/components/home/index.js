import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Modal, Button } from "antd";
import { Profile } from "../index.js";
// import auth from "../firebase/auth";
// import { db } from "../firebase/db/index";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import config from "../firebase/config";
import "firebase/auth";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
firebase.initializeApp({
  apiKey: process.env.REACT_APP_AK,
  authDomain: process.env.REACT_APP_AD,
});
class Home extends Component {
  state = {
    visiblelogin: false,
    confirmLoading: false,
    isSignedIn: false,
    login: 0,
    collapsed: true,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  async componentDidMount() {
    firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const handleCancel = () => {
      this.setState({ visiblelogin: false });
    };

    const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.reload();
        });
    };

    if (this.state.isSignedIn === true && this.state.login > 0) {
      this.setState({ visiblelogin: false, login: this.state.login+1 ,collapsed:true});
      window.location.reload();
    }
    const { Header, Content, Footer } = Layout;

    const showmenu = {
      display: this.state.collapsed === true ? "none" : false,paddingLeft: "24px" ,color: "white"
    };
    return (
      <div id="main-content">
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <div className="login">
              <Modal
                title="Login"
                visible={this.state.visiblelogin}
                footer={null}
                onCancel={handleCancel}
              >
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              </Modal>
            </div>
            <Button
              type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined
              )}
            </Button>
            <Menu
              defaultSelectedKeys={["1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1" style={showmenu} icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" style={showmenu} icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <Menu.Item key="" style={showmenu} icon={<ContainerOutlined />}>
                Option 3
              </Menu.Item>
              
              {this.state.isSignedIn ? (
                <Menu.Item key="4" style={showmenu} onClick={logout} icon={<ContainerOutlined />}>
                Logout
              </Menu.Item>
              ) : (
                <Menu.Item key="4" style={showmenu} onClick={(e) => this.setState({ visiblelogin: true,login:1 })} icon={<ContainerOutlined />}>
                Login
              </Menu.Item>
              )}
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
