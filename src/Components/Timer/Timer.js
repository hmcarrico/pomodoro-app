import React, { Component } from 'react';
import Status from '../Status/Status';
import Stats from '../Stats/Stats';
import './Timer.css';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            // time: 900, // Production
            time: 0,
            isOn: true,
            start: 0,
            current: 0,
            total: 0,
            break: false,
            break2: true,
            countWork: 0,
            countBreak: 0,
            initialCount: false,
            val: null
        }
        this.timer = null
    }

    countDown = () => {
        if(this.state.isOn === true){
            this.setState({isOn: false})
            this.timer = 
                setInterval(() => {
                if(this.state.time !== 0 && this.state.isOn === false && this.state.val !== null){
                    this.setState({
                        time: this.state.time - 1
                    })
                } else if (this.state.time === 0 && this.state.break2 === false){
                    this.setState({
                        time: this.state.value,
                        countBreak: this.state.countBreak + 1,
                        break2: true,
                        break: false
                    })
                }
                else if(this.state.time === 0 && this.state.isOn === false){
                    this.setState({
                        // time: 300, // Production
                        time: 3,
                        countWork: this.state.countWork + 1,
                        break: true,
                        break2: false
                    })
                }
            }, 1000);
        } else if(this.state.isOn === false){
            clearInterval(this.timer)
            this.setState({
                isOn: true,
                time: this.state.time
            })
        }
    }

    lengthChoose = (timer) => {
        if (timer !== null){
        this.setState({val: timer, time: timer, isOn: true})
        this.countDown()
        } else {
            this.setState({val: null, time: 0})
        this.countDown()
        }
    }

    render() {
        return (
        <div className='timer-container'>
        <div>
            <Status break={this.state.break}/>
            
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

            <Stats initial={this.state.val} countWork={this.state.countWork} countBreak={this.state.countBreak}/>

            <div>
                {
                    this.state.val !== null ?
                        <div className='initial-timer-pick'>
                            <label class="switch">
                                <input type="checkbox" checked={this.state.isOn !== true} onChange={() => this.countDown()}/>
                                <span class="slider round"></span>
                            </label> <br />
                        <button onClick={() => this.lengthChoose(null)}>Reset</button>
                        </div>
                        :
                        <div className='initial-timer-pick'>
                            <h5>Choose Pomodoro Session Time:</h5>
                            <button onClick={() => this.lengthChoose(300)}>5 Min</button>
                            <button onClick={() => this.lengthChoose(600)}>10 Min</button>
                            <button onClick={() => this.lengthChoose(900)}>15 Min</button> <br />

                            {/* Custom: <input /> */}
                        </div>
                }
            </div>
            <div>
                Created by Hunter Carrico
            </div>
        </div>
        )
    }
}

export default Timer;