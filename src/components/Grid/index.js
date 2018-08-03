import React, { Component } from 'react';
import './index.styl';

import { returnNumberOrOne } from '../../static/Math';

export class Grid extends Component {
    constructor (props) {
        super(props);

        this.className = props.className || '';
        this.style = props.style;

        this.children = props.children;
        if (!Array.isArray(this.children)) this.children = [this.children];

        this.calculateGridSize();

        this.propsColumnsTemplate = props.columnsTemplate;
        this.propsRowsTemplate = props.rowsTemplate;
    }

    getClassName() {
        return `grid ${this.className || ''}`;
    }

    getStyle() {
        const style = {
            gridTemplateColumns: this.propsColumnsTemplate || '1fr'.repeat(this.maxCol) || 'auto',
            gridTemplateRows: this.propsRowsTemplate || '1fr'.repeat(this.maxRow) || 'auto',
        };
        return { ...style, ...this.style };
    }

    calculateGridSize() {
        if (!this.children) return { maxCol: 0, maxRow: 0 };

        const rows = [];
        this.children.forEach((child) => {
            const details = {
                col: child.props.col || 'auto',
                row: child.props.row || 'auto',
                width: child.props.width || 'auto',
                height: child.props.height || 'auto',
            };
            if (!rows[details.row]) rows[details.row] = { width: 0, height: 0 }; // create row on first entry of each row

            const colSize = returnNumberOrOne(details.col) + returnNumberOrOne(details.width) - 1; // Because col n with width 1 should return a col of n instead of n + 1

            const width = details.col === 'auto' ? (rows[details.row].width) + colSize :  Math.max(rows[details.row].width, colSize);
            const height = details.row === 'auto' ? (rows[details.row].height) + returnNumberOrOne(details.height) :  Math.max(rows[details.row].height, returnNumberOrOne(details.height));

            rows[details.row] = { width, height };
        });
        let maxCol = 0;
        let maxRow = 0;

        rows.forEach((row, index) => {
            maxCol = Math.max(maxCol, row.width);
            maxRow = Math.max(maxRow, returnNumberOrOne(index) + row.height - 1);
        });

        this.maxCol = maxCol;
        this.maxRow = maxRow;
        return { maxCol, maxRow };
    }

    renderChildren() {
        if (!this.children) return null;
        return this.children.map((element) => {
            // because element.props is not flexible
            element = { ...element, props: { ...element.props, maxwidth: this.maxWidth, maxheight: this.maxHeight } };
            return element;
        });
    }
    render() {
        this.calculateGridSize();
        return <div className={this.getClassName()} style={this.getStyle()}>{ this.renderChildren() }</div>;
    }
}

export * from './GridElement';
