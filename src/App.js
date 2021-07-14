import React, {Component} from 'react';
import JobDisplay from './job-display';
import JobForm from './job-form';
import './App.css';

import en from './assets/en.png';
import ee from './assets/ee.png';
import vi from './assets/vi.png';

class App extends Component {
  state = {
    viewingMode: 1,
    lang: 'en'
  }
  constructor(props) {
    super(props);
    this.handleModeSwitch = this.handleModeSwitch.bind(this);
    this.switchLangEn = this.switchLangEn.bind(this);
    this.switchLangEe = this.switchLangEe.bind(this);
    this.switchLangVi = this.switchLangVi.bind(this);
  }

  handleModeSwitch() {
    this.setState({
      viewingMode: (this.state.viewingMode + 1) % 2
    });
  }

  switchLangEn() {
    this.setState({
      lang: 'en'
    });
    this.render();
  }
  switchLangEe() {
    this.setState({
      lang: 'ee'
    });
  }
  switchLangVi() {
    this.setState({
      lang: 'vi'
    });
  }
  
  render() {
    let mode = <JobDisplay lang={this.state.lang}></JobDisplay>;
    let modeName = "Submit Job Form";
    if (this.state.viewingMode === 1) {
      mode = <JobForm lang={this.state.lang}></JobForm>;
      modeName = "Printing Jobs";
    }
    return (<div id="app">
      <div id="mode-switch-wrapper">
        <button onClick={this.handleModeSwitch}>Switch to {modeName}</button>
      </div>
      {mode}
      <div id="languages">
        <input type="image" name="en" alt="English" src={en} onClick={this.switchLangEn}></input>
        <input type="image" name="ee" alt="Eesti" src={ee} onClick={this.switchLangEe}></input>
        <input type="image" name="vi" alt="Tiếng Việt" src={vi} onClick={this.switchLangVi}></input>
      </div>
    </div>);
  }
}

export default App;
