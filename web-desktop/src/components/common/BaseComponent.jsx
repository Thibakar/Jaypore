import { Component } from "react";
import { NavUtil } from "./navutil";

export class BaseComponent extends Component {
    constructor(props) {
        super(props)
        NavUtil.setProps(props)
    }
}