import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">

                    <div className="navbar-header ">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#buckarbuckaroo-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="logo navbar-brand navbar-left text-uppercase" href="/">www.dakotabuckaroo.com</a>
                    </div>

                    <div className="collapse navbar-collapse" id="buckaroo-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li data-toggle="collapse"><Link to='/Marinades'><div className="circle">Marinades</div></Link></li>
                            <li data-toggle="collapse"><Link to='/Recipes'><div className="circle">Recipes</div></Link></li>
                            <li data-toggle="collapse"><Link to='/Feedback'><div className="circle">Feedback</div></Link></li>
                            <li data-toggle="collapse"><Link to='/Contact'><div className="circle">Contact</div></Link></li>
                        </ul>
                    </div>
                 </div>
            </nav>

        );
    }
}

export default Navbar;

/*
 <div className="logo vertical-middle">dakotabuckaroo.com</div>

 */