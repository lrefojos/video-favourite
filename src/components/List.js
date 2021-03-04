import React, {Component} from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';

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
        this.setState({isLoading: true});
        // Emulate a call to an external API
        setTimeout(() => {
            this.setState({
                isLoading: false,
                videos: [
                    {
                        id: 0,
                        title: 'Cucurrucucu Paloma - Gaby Moreno ',
                        url: 'https://www.youtube.com/watch?v=mvI_Urnt3dk',
                        thumbnail: 'https://i.ytimg.com/vi/mvI_Urnt3dk/hq720.jpg'
                    },
                    {
                        id: 1,
                        title: 'Tu me dejaste de querer - C. Tangana',
                        url: 'https://www.youtube.com/watch?v=ltmO9XQVdSg',
                        thumbnail: 'https://i.ytimg.com/vi/ltmO9XQVdSg/hq720.jpg'
                    }
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
                <Header />
                <div className="container">
                    <div className="grid-container">
                        {
                            videos && videos.map((video, i) => {
                                return (<Item key={i} data={video}/>)
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}