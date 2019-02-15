import React, { Component } from 'react';
import './Stats.css';

class Stats extends Component {
    render() {
    return (
        <div >
        {
            this.props.initial ?
            <div className='stats-container'>
                <div>Completed: {this.props.countWork}</div>
                <div>Breaks Taken: {this.props.countBreak}</div>
            </div>
            : <div style={{display: 'none'}}> </div>
        }
        </div>
    )}
}

export default Stats;