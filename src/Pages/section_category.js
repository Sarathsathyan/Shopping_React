import React, {Component} from 'react';

class Section_category extends Component{
    render() {
        return (
            <div>
                <section className="category-area section-padding30">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center mb-85">
                                    <h2>Shop by Category</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img">
                                        <img src="assets/img/categori/cat1.jpg" alt=""></img>
                                        <div className="category-caption">
                                            <h2>Owmen`s</h2>
                                            <span className="best"><a href="#">Best New Deals</a></span>
                                            <span className="collection">New Collection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img text-center">
                                        <img src="assets/img/categori/cat2.jpg" alt=""></img>
                                        <div className="category-caption">
                                            <span className="collection">Discount!</span>
                                            <h2>Winter Cloth</h2>
                                            <p>New Collection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="single-category mb-30">
                                    <div className="category-img">
                                        <img src="assets/img/categori/cat3.jpg" alt=""></img>
                                        <div className="category-caption">
                                            <h2>Man`s Cloth</h2>
                                            <span className="best"><a href="#">Best New Deals</a></span>
                                            <span className="collection">New Collection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Section_category;