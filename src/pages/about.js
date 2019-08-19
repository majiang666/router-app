import React from 'react';
import { Link,Switch,Route,withRouter } from 'react-router-dom';
import Tel from './about/tel';
import Address from './about/address';
const Contact = () => {
    console.log("about......")
    return(
        <div>
            <nav>
                <Link to="/contact">联系电话</Link>
                <Link to="/contact/address">联系地址</Link>
            </nav>
            
            <Switch>
                <Route path='/contact' exact component={ Tel }></Route>
                <Route path='/contact/address' component={ Address }></Route>
            </Switch>
        </div>
    )
}

export default withRouter(Contact);