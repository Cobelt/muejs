import React, { Component } from 'react';
import {FooterLine} from "../../Footer/FooterItem";
import Footer from "../../Footer";

export class CardImage extends Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.source = props.src;
    }
    getClassName() {
        return `card-image${this.className && ' ' + this.className}`;
    }
    render() {
        return <img src={this.source} className={this.getClassName()} />;
    }
}

export class CardDescription extends Component {
    constructor(props) {
        super(props);
        this.className = props.className;
        this.children = props.children;
    }
    getClassName() {
        return `card-description${this.className && ' ' + this.className}`;
    }
    render() {
        return <div className={this.getClassName()}>{ this.children }</div>;
    }
}

export class CardFooter extends Footer {
    renderChildren() {
        return <FooterLine>{super.renderChildren()}</FooterLine>
    }
}