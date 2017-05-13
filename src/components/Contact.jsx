import React from 'react';
import Stars from './Stars'

class Contact extends React.Component {

    render() {
        return (
            <section className="contact-component" >
                <div class="container-fluid img-background center-block">
                    <div className="row">

                        <div className="col-md-2">
                        </div>

                        <div className="col-md-3 center-block hidden-sm hidden-xs">
                            <img className="img-circle img-responsive" src="./img/tomz.png" alt="Tom Z." />
                            <h2 className="text-capitalize text-center">tom zahradnicek</h2>
                        </div>
                        <div className="col-md-3 col-md-offset-1 text-center">
                            <h1 className="text-uppercase">contact us!</h1>
                            <p>I am the founder and CEO of Dakota Buckaroo LLC.
                                <br />Our company has been in business since 1995.
                                <br />It is our mission to make the very best marinades on the market.
                            </p>
                            <h3 className="text-center">Don't hesitate to reach out!</h3>
                            <a href="mailto:tom@dakotabuckaroo.com?Subject=Website%20Visit" target="_top">tom@dakotabuckaroo.com</a>

                        </div>
                    </div>

                </div>
                <div className="container-flex text-center">
                    <h5>Photographs by <strong>tzrad</strong>  Site written using <strong>React.js</strong>.</h5>
                </div>
            </section>
        );
    }
}

export default Contact;