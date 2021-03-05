import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getVideos } from '../api';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        // Emulate a call to an external API
        getVideos().then((data) => {
            this.setState({
                isLoading: false,
                videos: data
            });
        })
    }

    render() {
        const { videos, isLoading } = this.state;
        if (isLoading) {
            return (<Loading message="Loading..." />);
        }
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <div className="grid-container">
                        {
                            videos && videos.map((video, i) => {
                                return (<Item key={i} data={video} />)
                            })
                        }
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}