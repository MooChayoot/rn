import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, } from "antd";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
   
  }

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="site-layout-background" style={{ padding: 24 }}>
        <a>d</a>
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
