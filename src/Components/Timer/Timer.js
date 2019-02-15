import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            time: 900,
            isOn: true,
            start: 0,
            current: 0,
            total: 0,
            break: false,
            break2: true
        }
        this.timer = null
    }

    countDown = () => {
        if(this.state.isOn === true){
            this.setState({isOn: false})
            this.timer = 
                setInterval(() => {
                if(this.state.time !== 0 && this.state.isOn === false){
                    this.setState({time: this.state.time - 1})
                } else if (this.state.time === 0 && this.state.break2 === false){
                    this.setState({time: 5, break2: true, break: false})
                }
                else if(this.state.time === 0 && this.state.isOn === false){
                    this.setState({time: 300, break: true, break2: false})
                }
            }, 1000);
        } else if(this.state.isOn === false){
            clearInterval(this.timer)
            this.setState({isOn: true, time: this.state.time})
        }
    }

    render() {
        return (
        <div className='timer-container'>
        <div>
            {
                this.state.break ?
                <div>
                    YOUR ON A BREAK
                </div>
                :
                <div>
                    YOU SHOULD BE WORKING
                </div>
            }
        </div>
            <div>
                {
                    this.state.time % 60 === 0 ?
                    <div className='time-number'>
                        {this.state.time / 60}
                    </div>
                    :
                    <div className='time-number'>
                        {Math.floor(this.state.time / 60)} : {this.state.time % 60}
                    </div>
                }
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" onChange={() => this.countDown()}/>
                    <span class="slider round"></span>
                </label>
            </div>
            <div>
                Create by Hunter Carrico
            </div>
        </div>
        )
    }
}

export default Timer;