import React, { Component } from "react";
import './job-display.css'
const translation = require('./translation.json');

export default class JobDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeJobs: [],
            lang: props.lang
        };
    }

    componentDidMount() {
        fetch("http://localhost:1000/api/jobs")
        .then(res => res.json())
        .then(data => {
            this.setState({
                activeJobs: data
            });
        });

        setInterval(() => {
            this.setState({
                lang: this.props.lang
            });
        }, 200);
    }

    render() {
        let dataList = [];
        this.state.activeJobs.forEach((job, i) => {
            dataList.push(
                <li key={i}>
                    <div className="info-wrapper">
                        <p><b>{translation[this.state.lang].Name}:</b> {job.name}</p>    
                        <p><b>{translation[this.state.lang].Date}:</b> {job.date}</p>
                    </div>
                    <div className="info-wrapper">
                        <p><b>{translation[this.state.lang].PrintDuration}:</b> {job.printHour} : {job.printMin}</p>
                    </div>
                    <div className="info-wrapper">
                        <p><b>{translation[this.state.lang].FileName}:</b> {job.fileName}</p>
                        <p><b>{translation[this.state.lang].FileInfo}:</b> {job.fileDesc}</p>
                    </div>
                    <div className="info-wrapper">
                        <p><b>{translation[this.state.lang].PrinterInfo}:</b> {job.printerInfo}</p>
                    </div>
                </li>
            )
        });
        return (<div id="job-display-wrapper">
            <ul>{dataList}</ul>
    </div>);
    }
}