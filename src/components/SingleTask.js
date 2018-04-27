import React, {Component} from 'react';

class SingleTask extends Component {


render() {
    return(
        <li > {this.props.todo} <button onClick={this.props.delete}> x </button></li>

    );
}




}

export default SingleTask;