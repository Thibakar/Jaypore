import React, { Component } from 'react';
import  MyBegDescriptionListItem from './Mybegwrapper/mybegdescriptionitemlist';
import Mybegdescriptionitemlistone from './Mybegwrapper/mybegdescriptionitemlistone';
import Mybegdescriptionitemlisttwo from './Mybegwrapper/mybegdescriptionitemlisttwo';
import Mybegdescriptionitemlistthree from "./Mybegwrapper/MyBegDescriptionlistitemthree";
export default class mybeg extends Component {
    render() {
        return (
            <div className="mybeg-container">
                <MyBegDescriptionListItem/>
                <Mybegdescriptionitemlistone/>
                <Mybegdescriptionitemlisttwo/>
                <Mybegdescriptionitemlistthree/>
            </div>
        )
    }
}
