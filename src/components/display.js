import React from "react";
import './display.css';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: ''
        }
    };

    handleClick = (e) => {
        var name = e.target.value;
        if(name === 'AC') {
            this.setState({
                screen: ''
            });
        } else if(name === '=') {
            try {
                var answer = (eval(this.state.screen) || '') + '';
                this.setState({
                    screen: answer
                });
            } catch (e) {
                this.setState({
                    screen: 'Error'
                })
            }
        } else {
            this.setState({
                screen: this.state.screen.concat(e.target.value)
            });
        }
    }

    render () {
        var symbols = ['AC', 7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'];
        return (
            <div>
                <div className = 'screen'>{this.state.screen}</div>
                {symbols.map((symbol, i) => (
                    <span key = {i}>
                        <button className = 'button' value = {symbol} onClick = {(e) => this.handleClick(e)}>
                            {symbol}
                        </button>
                        {symbol === 'AC' || symbol === '/' || symbol === '*' || symbol === '-' ? (
                            <br></br>
                        ) : 
                            null
                        }
                    </span>
                ))}
            </div>
        );
    }
}

export default Display;