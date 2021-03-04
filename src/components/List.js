import {Component} from 'react';
import Loading from './Loading';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 2000);
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (<Loading message="Loading..."/>);
        }
        return (<div> Content </div>)
    }
}