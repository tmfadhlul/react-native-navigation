import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare class Element extends React.Component<{
    elementId: any;
    resizeMode?: any;
}, any> {
    static propTypes: {
        elementId: PropTypes.Validator<string>;
        resizeMode: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        resizeMode: string;
    };
    render(): JSX.Element;
}
