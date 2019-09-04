import React, { Component, Fragment } from 'react';
import PopUpPic from '../PopUpPic/PopUpPic';
import './SingleBookContainer.css';

export default class SingleBookContainer extends Component {
    state = { showPopup: false };

    togglePopUp = () => {
        this.setState(({showPopup})=>({
            showPopup: !showPopup
        }))
    };

    render() {
        const {thumbnailUrl, title, author} = this.props
        return (
            <Fragment>
                <div className="singleBook">
                    <img src={thumbnailUrl} onClick={this.togglePopUp} alt="thumbnail"/>
                    <div>{title}</div>
                    <div>{author}</div>
                </div>
                {this.state.showPopup ? (
                    <PopUpPic {...this.props}  closePopup={this.togglePopUp} />
                ) : null}
            </Fragment>
        );
    }
}
