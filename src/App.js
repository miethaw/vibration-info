import React, { Component } from 'react';
import './App.css';

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withTheme } from './features/common/hoc/withTheme'
import Navbar from './features/common/components/Navbar';
import VibrationInfoScreen from './screens/VibrationInfoScreen';
import GeneralInfoScreen from './screens/GeneralInfoScreen';
import { Switch, Route, Redirect, withRouter, useParams } from 'react-router-dom'
import SideBar from './navigation/sideBar';

import Cookies from 'js-cookie';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSidebar: true,
      siteInfo:null
    }
  }

  componentDidMount() {
    const usrData = Cookies.get("usr")? JSON.parse(Cookies.get("usr")):null;
    const siteData = Cookies.get("site")?JSON.parse(Cookies.get("site")):null;

    if (siteData && usrData)
      this.setState({siteInfo:siteData})
    else {
      // window.location="/plant-select"
    }
  }

  _handleSidebar = () => {
    this.setState(prev => ({ openSidebar: !prev.openSidebar }))
  }

  render() {
    const {siteInfo } = this.state
    const { theme } = this.props
    const pathname = this.props.history.location.pathname
    return (
      <div className="d-flex flex-column" style={{
        minHeight:'100vh',
        background: theme === "dark" ? "linear-gradient(-60deg, #101841,#202B60)" : theme === "light" ? "linear-gradient(-60deg,#e6e8eA,#F6F8FA)" : null
      }}>
       {siteInfo? <SideBar siteInfo={siteInfo} openSidebar={this.state.openSidebar} setSideBarOpen={() => this._handleSidebar()} site={"President Bakery"} />:null}
        <div style={{ paddingLeft: this.state.openSidebar ? 80 : 270 }} >
          <div className="p-2">
            <Navbar
              history={this.props.history}
            />
          </div>
          <div className="flex-grow-1" >
            <Switch>

              <Route path="/vibration-info" component={VibrationInfoScreen} />
              <Route path="/general-info" component={GeneralInfoScreen} />

              <Redirect to="/vibration-info" />

            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(withRouter(App));
