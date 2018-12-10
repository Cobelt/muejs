import React, { Component } from 'react';
import gridify from '../../../hoc/gridify';

import './index.styl';

export class UngridifiedScreen extends Component {
    render() {
        const { navHeight, marginNavHeight, style, children, ...otherProps } = this.props;
        const styles = {};
        styles['marginBottom'] = `-${navHeight}`;
        styles['paddingBottom'] = navHeight;
        if (marginNavHeight === 'true' && navHeight) {
            styles['marginTop'] = navHeight;
        }
        return <div style={{ ...styles, ...style }} {...otherProps}>{ children }</div>;
    }
}

export const Screen = gridify(UngridifiedScreen, { forcedProps: { fullWidth: 'true' }, componentName: 'screen' });