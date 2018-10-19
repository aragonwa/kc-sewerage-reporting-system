import React, { Component } from 'react';
import './App.css';
import numeral from 'numeral';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: numeral(event.target.value).format('0,0')})
  }
  render() {
    return (
      <div className="landing-page">
        <div className="row">
          <div className="col-sm-9">
            <h1>Sewerage Reporting System</h1>
            <p>
              Component agencies can now submit their Quarterly Swerage data
              online. We are currently testing this applicaiton with beta users.
            </p>

            <p>
              To test this new application and submit your quarterly data, log
              in by clicking the button below. You will be forwarded to a login
              screen. For first time users, please use the username and password
              assigned to you. Once you are logged in, you can change your
              password.
            </p>
          </div>
          <div className="col-sm-3">LOGO</div>
        </div>
        <div className="row">
          <div className="col-sm-12" style={{paddingTop:"45px"}}>
            <button className="btn btn-primary">LOG OUT</button>
          </div>
        </div>
        <h3>Masking example</h3>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        You typed: <code>{numeral(this.state.value).value()}</code>
      </div>
    );
  }
}

export default App;
