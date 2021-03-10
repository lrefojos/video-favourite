import React from 'react';
import PropTypes from 'prop-types';
 
const Header = ({onClickAdd}) => (
    <div className="header-content">
        <div className="header-title-text">
            My favourite videos
        </div>
        <input className="header-button-add" type="button" onClick={onClickAdd} value="Add video"></input>
    </div>
)

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};

export default Header;