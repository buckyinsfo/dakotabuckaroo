import React from 'react';
import Stars from './Stars';

class Recipes extends React.Component {

    render() {
        return (
            <section className="recipes-component">
                <Stars />
                <div className="container" >
                    <h2 className="text-center">Our Recipes</h2>`
                    <div className="row">

                        <div className="menu-item-tile col-lg-6 col-md-6 col-sm-12">
                            <div id="chicken" className="protein row">
                                <div className="menu-item-description">
                                    <h3 className="menu-item-title">Chicken</h3>
                                    <div className="menu-item-detail"><p>Lorem ipsum dolor sit amet, cum nemore vituperata in. Id has quidam petentium assentior. Aperiri suscipit usu at, id vero idque eum. Pro molestie expetendis ex, eum mundi consectetuer signiferumque ex.</p><p>Duo ad quodsi blandit repudiandae, ea pri idque vituperata interesset. Tritani persecuti pro et, per in tation maiestatis. Pri at tota sanctus nusquam, nec erant verear et. Aeque euripidis ad eos. Cu vix praesent gubergren.</p><p>Duo cu eros fugit consequat, et viris eripuit cum. Facete labitur vulputate mel eu, an mucius facilisi has. Dicit consectetuer ius eu, maiestatis sadipscing quo ut, cum ea meliore epicurei torquatos. No vis dicit expetenda, an mucius adipiscing comprehensam sed.</p></div>
                                </div>
                            </div>
                            <hr className="visible-xs" />
                        </div>

                        <div className="menu-item-tile col-lg-6 col-md-6 col-sm-12">
                            <div id="beef" className="protein row">
                                <div className="menu-item-description">
                                    <h3 className="menu-item-title">Beef</h3>
                                    <div className="menu-item-detail"><p>Lorem ipsum dolor sit amet, cum nemore vituperata in. Id has quidam petentium assentior. Aperiri suscipit usu at, id vero idque eum. Pro molestie expetendis ex, eum mundi consectetuer signiferumque ex.</p><p>Duo ad quodsi blandit repudiandae, ea pri idque vituperata interesset. Tritani persecuti pro et, per in tation maiestatis. Pri at tota sanctus nusquam, nec erant verear et. Aeque euripidis ad eos. Cu vix praesent gubergren.</p><p>Duo cu eros fugit consequat, et viris eripuit cum. Facete labitur vulputate mel eu, an mucius facilisi has. Dicit consectetuer ius eu, maiestatis sadipscing quo ut, cum ea meliore epicurei torquatos. No vis dicit expetenda, an mucius adipiscing comprehensam sed.</p></div>
                                </div>
                            </div>
                            <hr className="visible-xs" />
                        </div>

                        <div className="menu-item-tile col-lg-6 col-md-12 col-sm-12">
                            <div id="sushi" className="protein row">
                                <div className="menu-item-description">
                                    <h3 className="menu-item-title">Fish</h3>
                                    <div className="menu-item-detail"><p>Lorem ipsum dolor sit amet, cum nemore vituperata in. Id has quidam petentium assentior. Aperiri suscipit usu at, id vero idque eum. Pro molestie expetendis ex, eum mundi consectetuer signiferumque ex.</p><p>Duo ad quodsi blandit repudiandae, ea pri idque vituperata interesset. Tritani persecuti pro et, per in tation maiestatis. Pri at tota sanctus nusquam, nec erant verear et. Aeque euripidis ad eos. Cu vix praesent gubergren.</p><p>Duo cu eros fugit consequat, et viris eripuit cum. Facete labitur vulputate mel eu, an mucius facilisi has. Dicit consectetuer ius eu, maiestatis sadipscing quo ut, cum ea meliore epicurei torquatos. No vis dicit expetenda, an mucius adipiscing comprehensam sed.</p></div>
                                </div>
                            </div>
                            <hr className="visible-xs" />
                        </div>

                        <div className="menu-item-tile col-lg-6 col-md-12 col-sm-12">
                            <div id="sushi" className="protein row">
                                <div className="menu-item-description">
                                    <h3 className="menu-item-title">Plusieurs</h3>
                                    <div className="menu-item-detail"><p>Lorem ipsum dolor sit amet, cum nemore vituperata in. Id has quidam petentium assentior. Aperiri suscipit usu at, id vero idque eum. Pro molestie expetendis ex, eum mundi consectetuer signiferumque ex.</p><p>Duo ad quodsi blandit repudiandae, ea pri idque vituperata interesset. Tritani persecuti pro et, per in tation maiestatis. Pri at tota sanctus nusquam, nec erant verear et. Aeque euripidis ad eos. Cu vix praesent gubergren.</p><p>Duo cu eros fugit consequat, et viris eripuit cum. Facete labitur vulputate mel eu, an mucius facilisi has. Dicit consectetuer ius eu, maiestatis sadipscing quo ut, cum ea meliore epicurei torquatos. No vis dicit expetenda, an mucius adipiscing comprehensam sed.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Stars />
            </section>
        );
    }
}

export default Recipes;