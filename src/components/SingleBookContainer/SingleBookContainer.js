import React, {Component,Fragment} from 'react';
import './SingleBookContainer.css';

export default class SingleBookContainer extends Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    render(){
        return(
            <Fragment>
                <div className="singleBook">{this.props.title}
                </div>
            </Fragment>
        )
    }
}
