import React, { Component } from 'react';
import './Status.css';

class Status extends Component {
    render() {
        return (
        <div className='status-parent'>
            {
                this.props.break ?
                <div>
                    <h4>Break Time</h4>
                    <img src={'https://static.thenounproject.com/png/193557-200.png'} />
                </div>
                :
                <div>
                    <h4>Time to work!</h4>
                    <img src={'https://static.thenounproject.com/png/791013-200.png'} />
                </div>
            }
        </div>
        )
    }
}

export default Status;