import React, { Component } from "react";
import './job-form.css';
import {GoogleReCaptcha} from "react-google-recaptcha-v3"

const translation = require('./translation.json');

export default class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: props.lang
        };
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                lang: this.props.lang
            });
        }, 200);
    }
    render() {
        return (<div id="job-form-wrapper">
            <form action="http://localhost:1000/api/jobs" method="post">
                <div>
                    <div>
                        <p>{translation[this.state.lang].BasicInfo}:</p>
                        <input type="text" placeholder="Name" name="name" maxlength="20"></input>
                        <input type="date" placeholder="Date" name="date"></input>
                    </div>
                    <div>
                        <p>{translation[this.state.lang].PrintDuration}:</p>
                        <input type="number" placeholder="Hour" name="printHour"></input>
                        <input type="number" placeholder="Minute" name="printMin"></input>
                    </div>
                    <div>
                        <p>{translation[this.state.lang].FileInfo}:</p>
                        <input type="text" placeholder="File name" name="fileName" maxlength="30"></input>
                        <textarea placeholder="Description of print" name="fileDesc" maxlength="200"></textarea>
                        <input type="text" placeholder="Printer model and type" name="printerInfo" maxlength="20"></input>
                    </div>
                </div>
                <div id="captcha">
                    <GoogleReCaptcha/>
                </div>
                <button>{translation[this.state.lang].Submit}</button>
            </form>
    </div>);
    }
}