import React, {Component} from 'react';
import Loading from './Loading';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        // Emulate a call to external API
        setTimeout(() => {
            this.setState({
                isLoading: false,
                videos: [
                    {id: 1},
                    {id: 2},
                    {id: 3}
                ]
            });
        }, 2000);
    }

    render() {
        const { videos, isLoading } = this.state;
        if (isLoading) {
            return (<Loading message="Loading..."/>);
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="grid-container">
                        {
                            videos && videos.map((video, i) => {
                                return (<span key={i}>#{video.id}</span>)
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}