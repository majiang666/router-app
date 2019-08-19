import React, { Component } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import Contact from './pages/contact';
import Authorized from './components/Authorized';
import Header from './components/header';
import Footer from './components/footer';
import { Switch,Route,Link } from 'react-router-dom';

const Info = () => {
  return(
    <div>公司简介</div>
  )
}

const Culture = () => {
  return(
    <div>公司文化</div>
  )
}

const About = ({ match }) => {
  return(
    <div className="about-box">
     <Header />
      <main>
        <nav>
          <Link to={`${match.path}`}>公司简介</Link>
          <Link to={`${match.path}/culture`}>企业文化</Link>
        </nav>
        <Switch>
            <Route path={`${match.path}`} exact component={Info}></Route>
            <Route path={`${match.path}/culture`} component={Culture}></Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Authorized path='/' exact component={Home}></Authorized>
              <Authorized path='/about' component={About}></Authorized>
              <Authorized path='/contact' component={Contact}></Authorized>
              <Route path='/login' component={Login}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
