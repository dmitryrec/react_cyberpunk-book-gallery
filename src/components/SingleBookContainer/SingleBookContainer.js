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
                <div className="singleBook">
                    <img src={this.props.thumbnailUrl}/>
                    <div>{this.props.title}</div> 
                    <div>{this.props.author}</div>
                </div>
            </Fragment>
        )
    }
}
