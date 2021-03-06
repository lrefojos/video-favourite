import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getVideoDetail } from '../api';
import Loading from './Loading';
import Video from './Video';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            video: null,
            error: null
        }
    }

    async componentDidMount() {
        const { match } = this.props;
        this.setState({ isLoading: true });
        try {
            const video = await getVideoDetail({ idVideo: match.params.id });
            this.setState({
                video,
                isLoading: false
            });
        } catch (error) {
            this.setState({ isLoading: false, error });
        }
    }

    render() {
        const { isLoading, video, error } = this.state;
        const { match } = this.props;
        if (isLoading || !video) {
            return (<Loading message={`Loading video (#${match.params.id})....`} />)
        }
        if (error) {
            return <p className="error">{error.message}</p>
        }

        return (
            <React.Fragment>
                <div className="detail-container">
                    <Video title={video.title} embed={video.embed} />
                </div>
                <div className="detail-summary">
                    <h2 className="detail-title">{video.title}</h2>
                    <p>{video.description}</p>
                </div>
            </React.Fragment>
        )

    }
}

withRouter(Details);