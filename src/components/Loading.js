import  {Component} from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
    render() {
        return (
            <div className="loader">
               {this.props.message || 'Loading ...'}
            </div>
        )
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired
}