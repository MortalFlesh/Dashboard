import React from 'react';
import {List} from 'immutable';
import cn from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const FormItem = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element,
        ]).isRequired,
        id: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        sizeLabel: React.PropTypes.number,
        size: React.PropTypes.number,
    },

    getDefaultProps() {
        return {
            sizeLabel: -1,
            size: -1,
        };
    },

    render() {
        let classes = new List();

        if (this.props.sizeLabel >= 0) {
            classes = classes.push(`col-sm-${this.props.sizeLabel}`);
        }

        classes = classes.toJS();

        if (this.props.size >= 0) {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.id} className={cn('control-label', classes)}>
                        {this.props.title}
                    </label>

                    <div className={`col-sm-${this.props.size}`}>
                        {this.props.children}
                    </div>
                </div>
            );
        }

        return (
            <div className="form-group">
                <label htmlFor={this.props.id} className={cn(classes)}>
                    {this.props.title}
                </label>
                {this.props.children}
            </div>
        );
    }
});

export default FormItem;
