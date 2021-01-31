import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Avatar } from "antd";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Avatar
          size={64}
          src="https://firebasestorage.googleapis.com/v0/b/reactnode-8c1eb.appspot.com/o/profile%2F144217573_127770892467677_3152386770290737802_n.jpg?alt=media"
          style={{ width: "10%", height: "20%", left: "45%" }}
        />
        <p style={{ textAlign: "center" }}>Chaiyoot Chaiyo</p>
        <label>swda</label>
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
