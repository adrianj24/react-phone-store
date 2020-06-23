import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    deHandleIncrement = () => {
        this.setState({ count: this.state.count - 1})
    }
    
    render() {
        return(
            <div>
                <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick={this.handleIncrement} className={"btn btn-secondary btn-sm"}>Add</button>
                <button onClick={this.deHandleIncrement} className={"btn btn-secondary btn-sm"}>Subtract</button>
            </div>
        )
    }

    // getBadgeClasses() {
    //     let classColor = "badge m-2 badge-";
    //     classColor += this.state.count === 0 ? "warning" : "primary";
    //     return classColor;
    // }

    getBadgeClasses() {
        // let classColor = "badge m-2 badge-";
        if (this.state.count === 0){
            return "badge m-2 badge-warning";
        }
        if (this.state.count < 0) {
            return "badge m-2 badge-danger";
        }
        return "badge m-2 badge-primary";
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "0" : count;
    }

}

export default Counter;