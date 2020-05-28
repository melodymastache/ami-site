import React from 'react';
import $ from 'jquery';
import bodyParser from 'body-parser';
import data from '../components/Data';

export default class Protected extends React.Component {
    constructor() {
        super();
        this.state = {
            resources: []
        }
    }
    componentDidMount() {
        $("#protected").click(function () {
            $("#protected").slideToggle("fast");
        });
    }
    render() {
        return (
            <div class="resources text">
                <div class="pg-desc">
                    <p class="quote">
                        <em>You have brains in your head.<br></br>
                            You have feet in your shoes<br></br>
                            You can steer yourself<br></br>
                            any direction you choose.<br></br>
                            You're on your own. And you know what you know.<br></br>
                            And YOU are the one who'll decide where to go.<br></br>
                        </em>
                        - Dr. Seuss, "Oh, The Places You'll Go!"
                    </p>

                    <p>I have created the resources below over the past few years. You may recognize a few. Use what works for you. Please inform me of any errors or broken links.</p>
                </div>

                {/* {this.state.resources.map(resource => {
                    return (
                        <h2 class="list-title">Social Studies 9</h2>
                        <ul class="list-body">
                            {() => {
                                if (resource.sectionTitle === "Social Studies 9") {
                                    return (<li class="list-item"><a href={resource.link}></a> - {resource.type}</li>);
                                }
                            }}
                        </ul>
                    )
                })} */}

            </div>
        )
    }
}


