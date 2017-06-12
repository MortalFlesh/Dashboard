import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import cn from "classnames";

class FormItem extends React.PureComponent {
    render() {
        const {id, title, sizeLabel, size, children} = this.props;
        
        let classes = new List();

        if (sizeLabel >= 0) {
            classes = classes.push(`col-sm-${sizeLabel}`);
        }

        classes = classes.toJS();

        if (size >= 0) {
            return (
                <div className="form-group">
                    <label htmlFor={id} className={cn('control-label', classes)}>
                        {title}
                    </label>

                    <div className={`col-sm-${size}`}>
                        {children}
                    </div>
                </div>
            );
        }

        return (
            <div className="form-group">
                <label htmlFor={id} className={cn(classes)}>
                    {title}
                </label>
                {children}
            </div>
        );
    }
}

FormItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    sizeLabel: PropTypes.number,
    size: PropTypes.number,
};

FormItem.defaultProps = {
    sizeLabel: -1,
    size: -1,
};

export default FormItem;
