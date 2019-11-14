import React,{Component} from 'react'
import PropTypes from 'prop-types'
class RenderFrmme extends Component {
    
    static propTypes = {
        content: PropTypes.string.isRequired,
        stylesheets: PropTypes.arrayOf(PropTypes.string),
    };

    /**
     * Called after mounting the component. Triggers initial update of
     * the iframe
     */
    componentDidMount() {
        this._updateIframe();
    }

    /**
     * Called each time the props changes. Triggers an update of the iframe to
     * pass the new content
     */
    componentDidUpdate() {
        this._updateIframe();
    }

    /**
     * Updates the iframes content and inserts stylesheets.
     * TODO: Currently stylesheets are just added for proof of concept. Implement
     * and algorithm which updates the stylesheets properly.
     */
    _updateIframe() {
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        const head = document.getElementsByTagName('head')[0];
        document.body.innerHTML = this.props.content;
        
        this.props.stylesheets.forEach(url => {
            const ref = document.createElement('link');
            ref.rel = 'stylesheet';
            ref.type = 'text/css';
            ref.href = url;
            head.appendChild(ref);
        });
    }

    /**
     * This component renders just and iframe
     */
    render() {
        return <iframe className="RenderFrame" title={"RenderFrame"} id={"RenderFrame"} ref="iframe"/>
    }
}

export default RenderFrmme