import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CapsuleButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <span
                className={"inline-block w-full py-3 px-12 lg:px-24 rounded-full border border-gray-100 hover:border-red-800 border-solid transition-all duration-300 " +
                Object.values(this.props.customClasses).filter( className => className.length).join(" ")}
            >
                {this.props.text}
            </span>
        );
    }
}

CapsuleButton.propTypes = {
    text: PropTypes.string.isRequired,
    customClasses : PropTypes.object,
};

CapsuleButton.defaultProps = {
    customClasses: {
        bgColor: "bg-red-800",
        bgColorHover: "hover:bg-gray-100",
        darkBgColor: "",
        darkBgColorHover: "",
        textColor: "text-gray-100",
        textColorHover: "hover:text-red-800",
        darkTextColor: "",
        darkTextColorHover: "",
    }
}


export default CapsuleButton;
