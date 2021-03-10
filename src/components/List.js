import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer';
import { getVideos } from '../api';
import Add from './Add';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            videos: null,
            error: null,
            showAdd: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const videos = await getVideos();
            this.setState({
                isLoading: false,
                videos
            });
        } catch {
            this.setState({
                error: true,
                isLoading: false
            });
        }

    }

    handleAdd = (e) => {
        e.preventDefault();
        this.setState({ showAdd: true })
    }

    handleCloseAdd = (reload) => {
        return async () => {
            if (reload) {
                this.setState({
                    isLoading: true, 
                    showAdd: false
                });
                try {
                    const videos = await getVideos();
                    this.setState({
                        isLoading: false,
                        showAdd: false,
                        videos: videos
                    });
                } catch(error) {
                    console.error(error);
                    this.setState({
                        isLoading: false,
                        showAdd: false,
                        error: true
                    });
                }
            } else {
                this.setState({ showAdd: false });
            }
        }
    }

    render() {
        const { videos, isLoading, error } = this.state;
        if (isLoading) {
            return (<Loading message="Loading..." />);
        }
        if (error) {
            return (<p className="error"> {error.message} </p>);
        }
        return (
            <React.Fragment>
                <Header onClickAdd={this.handleAdd} />
                <div className="container">
                    <div className="grid-container">
                        {
                            videos && videos.map((video, i) => {
                                return (<Item key={i} data={video} />)
                            })
                        }
                    </div>
                </div>
                {this.state.showAdd && (<Add onClose={this.handleCloseAdd} />)}
                <Footer />
            </React.Fragment>
        )
    }
}