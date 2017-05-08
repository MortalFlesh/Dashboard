import cn from "classnames";
import React from "react";
import PropTypes from "prop-types";

class PrimaryButton extends React.PureComponent {
    render() {
        const size = this.props.big ? 'btn-lg' : 'btn-sm';
        const type = this.props.success ? 'btn-success' : 'btn-primary';

        return (
            <button type="button" className={cn('btn', size, type)} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

PrimaryButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
    big: PropTypes.bool,
    success: PropTypes.bool,
};

PrimaryButton.defaultProps = {
    big: false,
    success: false,
};

export default PrimaryButton;
