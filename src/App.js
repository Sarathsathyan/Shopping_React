import React, {Component} from 'react';

import './App.css';
import { BrowserRouter as Router,Switch, Route , Redirect} from 'react-router-dom';
import {Link} from 'react-router'

// import BaseRouter from "./routes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slider from "./components/slider";
import Section_category from "./Pages/section_category";
import Login from "./Pages/login";
import Registration from "./Pages/registration";
import Contact from "./Pages/contact";
class App extends Component {
  render() {
    return(
        <Router>
        <div>
            {/*<div id="preloader-active">*/}
            {/*    <div className="preloader d-flex align-items-center justify-content-center">*/}
            {/*        <div className="preloader-inner position-relative">*/}
            {/*            <div className="preloader-circle"></div>*/}
            {/*            <div className="preloader-img pere-text">*/}
            {/*                <img src="assets/img/logo/logo.png" alt=""></img>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* Header */}




            <Router>
                <div>
                    <Navbar>

                    </Navbar>
                <main>
                    <Switch>
                        <Route exact path='/' component={Slider}></Route>

                        <Route exact path='/login' >
                            <Login>

                            </Login>
                        </Route>
                        <Route exact path='/contact'>
                            <Contact>

                            </Contact>
                        </Route>
                        <Route exact path='/register' component={Registration}></Route>

                        <Redirect to={'/'}></Redirect>

                    </Switch>
                </main>
                </div>
            </Router>

            <main>


                <Section_category></Section_category>


            </main>

            <Footer></Footer>
        </div>
        </Router>
    );

  }




}

export default App;
