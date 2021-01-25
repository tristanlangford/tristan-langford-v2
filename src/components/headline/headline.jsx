import React from 'react';
import './headline.css';

export default class Headline extends React.Component {
    constructor () {
        super();
        this.state = {
        }
      }

    render() {
        return <div className="headline">
            <div className="collage">
                <div className="central-container">
                    <div className="circle-image">
                        <img src=""></img>
                    </div>
                    <h1 className="name">Tristan Langford</h1>
                    <h2 className="title">Full-Stack Software Engineer</h2>
                </div>
            </div>
        </div>
    }

}