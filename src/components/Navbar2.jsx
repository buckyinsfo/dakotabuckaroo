import React from 'react';


class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    ...
                </div>
            </nav>

        );
    }
}

export default Navbar;


/*
<div className="navbar navbar-your-className navbar-static-top">
    <div className="navbar-inner">
        <div className="container">
            <button type="button" className="btn btn-navbar navbar-right" data-toggle="collapse" data-target=".nav-collapse"></button>
            <a className="brand" href="#">Your Logo</a>
            <div className="nav-collapse collapse">
                <ul class="nav nav-pills">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Profile</a></li>
                    <li role="presentation"><a href="#">Messages</a></li>
                </ul>

            </div>
        </div>
    </div>
</div>

*/