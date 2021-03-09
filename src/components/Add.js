import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.onClose,
        }
    }

    render() {
        const { onClose } = this.props;
        return(
            <div className="modal">
                <div className="modal-content">
                   <span className="close" onClick={onClose(false)}>&times;</span>
                   <h2>Create a new video</h2>
                   HERE comes the modal 
                </div>
            </div>
        );
    }
}

Add.propTypes = {
    onClose: PropTypes.func.isRequired
};