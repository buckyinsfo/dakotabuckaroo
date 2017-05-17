import React from 'react';

class Stars extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="star-shim hidden-sm hidden-xs center-block text-center" >
                        <i className="fa fa-star fa-2x pull-left col-md-1 col-md-offset-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                        <i className="fa fa-star fa-2x pull-left col-md-1 vertical-middle" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stars;
