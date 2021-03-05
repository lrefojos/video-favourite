import React from "react";
import { withRouter } from "react-router";

export default class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                HELLO {this.props.match.params.id}
            </React.Fragment>
        )
    }
}

withRouter(Details);