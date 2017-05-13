import React from 'react';
import Stars from './Stars';

class Home extends React.Component {

    render() {

        return (
            <section className="home-component" >
                <Stars />
                <div class="container-fluid img-background center-block">
                    <div className="row flex-container home-content">
                        <div className="col-md-6">
                            <h1 className="buckaroo-solgan text-uppercase">Enjoy the Great Taste of the Wild West!</h1>
                            <ul>
                                <li>Does not require refrigeration after opening</li>
                                <li>Delivers flavor and tenderness without fat or MSG</li>
                                <li>Available in convenient 15.5 oz. squeezable bottles</li>
                            </ul>
                            <h3>Satisfaction guaranteed!</h3>
                            <h3 className="buckaroo-taste text-capitalize">a bold blend of Idaho's <span className="text-uppercase">Old West</span> with a hint of the <span className="text-uppercase">Dakotas</span>.</h3>

                        </div>
                        <div className="col-md-4 center-block hidden-sm hidden-xs">
                            <img className="img-circle img-responsive" src="./img/white-horse-action-shot.jpg" alt="Buckaroo logo" />
                        </div>
                    </div>
                </div>
                <Stars />
            </section>
        );
    }
}

export default Home;