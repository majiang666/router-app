import React from 'react';
import { Link,Switch,Route,withRouter } from 'react-router-dom';
import Tel from './about/tel';
import Address from './about/address';
import Header from '../components/header';
import Footer from '../components/footer';
const Contact = () => {
    return(
        <div>
            <Header />
            <main>
                <nav>
                    <Link to="/contact">联系电话</Link>
                    <Link to="/contact/address">联系地址</Link>
                </nav>
                
                <Switch>
                    <Route path='/contact' exact component={ Tel }></Route>
                    <Route path='/contact/address' component={ Address }></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default withRouter(Contact);