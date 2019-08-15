import React, {Component,Fragment} from 'react';
import PopUpPic from '../PopUpPic/PopUpPic';
import './SingleBookContainer.css';

export default class SingleBookContainer extends Component {
    constructor(props){
        super(props);
        this.state = { showPopup: false };
    }

    togglePopUp = ()=>{
        this.setState({
            showPopup: !this.state.showPopup
        })
    };

    render(){
        return(
            <Fragment>
                <div className="singleBook">
                    <img src={this.props.thumbnailUrl} onClick={this.togglePopUp}/>
                    <div>{this.props.title}</div> 
                    <div>{this.props.author}</div>
                </div>
                {this.state.showPopup ? (
                    <PopUpPic {...this.props} closePopup={this.togglePopUp}/>
                ): null}
            </Fragment>
        );
    }
}
