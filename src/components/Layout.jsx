import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Routes from '../routes.js';


class Layout extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Navbar />
                    <div className="main">
                        <Routes />
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;