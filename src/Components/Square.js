import React, {Component} from 'react';
import './Component.css'
class Square extends Component {

    handleClick = () => {
        this.props.handleLocation(this.props.index)
    }

    render(){
        return(

            <div>
                <div id={this.props.index} className="square" onClick={ this.handleClick}>?</div>

            </div>

        );
    }
}











export default Square
