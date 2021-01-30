import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Input, Radio , Checkbox } from 'antd';
import axios from 'axios';
import moment from 'moment';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
  
    async componentDidMount() {
       
      } 
    render() {
        return (
            <div id="main-content">
            <label>a</label>
            </div >
        );
    }
}
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);