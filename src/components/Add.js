import { Component } from 'react';
import PropTypes from 'prop-types';
import { addVideo } from '../api';

const parseYoutubeUrl = (url) => {
    const match = url.match(/[?&]([^=#]+)=([^&#]*)/);
    return match && match[2];
}

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            showSending: false,
            title: '',
            url: '',
            description: ''
        }
    }

    handleChange = (field) => {
        return(event) => {
            this.setState({
                [field]: event.target.value
            });
        }
    }

    validation(app) {
        if (app.title.length > 0 && app.url.length > 0 && app.description.length > 2) {
            return true
        }
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onClose } = this.props;
        const token = parseYoutubeUrl(this.state.url || '');
        if(this.validation(this.state) && token) {
            this.setState({showSending:true})
            addVideo({
                title: this.state.title,
                description: this.state.description,
                url: this.state.url,
                thumbnail: `https://img.youtube.com/vi/${token}/maxresdefault.jpg`,
                embed: `https://www.youtube.com/embed/${token}`
            }).then(onClose(true));
        } else {
            this.setState({
                hasError:true
            });
        }
    }

    render() {
        const { showSending, title, url, description, hasError } = this.state;
        const { onClose } = this.props;
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose(false)}>&times;</span>
                    <h2>Create a new video</h2>
                    { showSending && (<span className="success">Sending... </span>) }
                    { hasError && (<div className="error">Some fields are emtpy or contains a wrong value</div>) }
                    <form>
                        <label>Title</label>
                        <input type="text" value={title} onChange={this.handleChange("title")} minLength="3" maxLength="200" required/>
                        <label>Url</label>
                        <input type="text" value={url} onChange={this.handleChange("url")} minLength="3" maxLength="200" required/>
                        <label>Description</label>
                        <textarea value={description} onChange={this.handleChange("description")} required/>
                        <input type="submit" onClick={this.handleSubmit} value="Sumbit" disabled={showSending}/>
                    </form>
                </div>
            </div>
        );
    }
}

Add.propTypes = {
    onClose: PropTypes.func.isRequired
};