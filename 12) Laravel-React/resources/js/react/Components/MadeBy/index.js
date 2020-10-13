import React, {Component} from 'react';

class MadeBy extends Component {
    render() {
        return (
            <p className="text-lg dark:text-gray-100">
                Made with
                <span className="text-yellow-500"> &hearts; Banana Corporation</span>
            </p>
        );
    }
}

export default MadeBy;
