import React from 'react';

class Footer extends React.Component {

    render () {

        return (

            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="flex-container col-md-offset-3">
                            <div className="contact-type col-md-2 center-block text-center">

                                <a href="mailto:contact@dakotabuckaroo.com" target="_blank">
                                    <span className="fa-stack fa-2x">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-envelope-o fa-inverse fa-stack-1x"></i>
                                    </span>
                                    <p>Email Us</p>
                                </a>

                            </div>
                            <div className="contact-type col-md-2 center-block text-center">

                                <a href="http://twitter.com/dakotabuckaroo" target="_blank">
                                    <span className="fa-stack fa-2x">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-inverse fa-stack-1x"></i>
                                    </span>
                                    <p>Twitter</p>
                                </a>

                            </div>
                            <div className="contact-type col-md-2 center-block text-center">

                                <a href="https://instagram.com/dakotabuckaroo/" target="_blank">
                                    <span className="fa-stack fa-2x">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-instagram fa-inverse fa-stack-1x"></i>
                                    </span>
                                    <p>Instagram</p>
                                </a>

                            </div>
                            <div className="contact-type col-md-2 center-block text-center">

                                <a href="https://www.youtube.com/channel/UCfrlzqMxbBOLIeVVMRSzTJA" target="_blank">
                                    <span className="fa-stack fa-2x   ">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-youtube-play fa-inverse fa-stack-1x"></i>
                                    </span>
                                    <p>YouTube</p>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="copyright-content text-center">
                            <p className="vertical-middle">© 2017 Dakota Buckaroo LLC - All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;