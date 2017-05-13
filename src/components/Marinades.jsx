import React from 'react';
import Stars from './Stars';

class Marinades extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <section className="marinade-comp" >
                <Stars />
                <div class="container">
                    <div className="text-center">
                        <h1 className="text-uppercase">Introducing <br/>Dakota Buckaroo <br />Marinades!</h1>
                    </div>
                    <div className="container">` ``
                        <div className="flex-container">
                            <div className="col-md-4 col-md-offset-2 text-center">
                                <img className="img-circle img-responsive" src="./img/original.jpg" alt="original" />
                                <h3>Original</h3>
                                <p>a delicate yet zesty flavor and may be basted on ribs, added as a seasoning to gravy, soup, stews, chili, white beans, refried beans, vegetables, meatloaf, and fish. Brush over a roast before baking for a deep rich flavor, yet tender and succulent.</p>
                            </div>
                            <div className="col-md-4 text-center">>
                                <img className="img-circle img-responsive" src="./img/hot-spicy.jpg" alt="hot & spicy" />
                                <h3>Hot & Spicy</h3>
                                <p>hot with a definite bite, for making an outstanding addition to Hot Wings, Spicy Shrimp, Fajitas, Chili, Spanish Rice and certain vegetables or added to ground meats for superb burgers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Stars />
            </section>
        );
    }
}

export default Marinades;