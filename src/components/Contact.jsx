import React from 'react';

class Contact extends React.Component {

    render() {
        return (
            <div className="contact-comp text-center">
                <h2>CONTACT US</h2>
                <h3>TOM ZAHRADNICEK</h3>
                <p>
                    I am the founder and CEO of Dakota Buckaroo LLC.
                    <br />Our company has been in business since 1995.  It is our mission to make the very best marinades on the market.
                    <br />
                    Don't hesitate to reach out!
                    <a href="mailto:tom@dakotabuckaroo.com?Subject=Website%20Visit" target="_top">tom@dakotabuckaroo.com</a>
                    <br /><br />
                    Photographs by <strong>tzrad</strong>.
                    <br /><br />
                    Site written using <strong>React.js</strong>.
                </p>
            </div>
        );
    }
}

export default Contact;