import PropTypes from 'prop-types';

const Video = ({title, embed}) => (
    <div className="video-container">
        <iframe
            className="player"
            title={title}
            tpye="text/html"
            width="100%"
            height="400px"
            src={embed}
            frameBorder="0">
        </iframe>
    </div>
)

Video.propTypes = {
    title: PropTypes.string.isRequired,
    embed: PropTypes.string.isRequired
}

export default Video;