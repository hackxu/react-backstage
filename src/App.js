import React, {Component} from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// import createHistory from 'history/createHashHistory';
import UserAddPage from './pages/UserAdd'
import HomePage from './pages/Home'

// const hashHistory = createHistory();

class RO extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/user/add" component={UserAddPage}/>
                </div>
            </Router>
        )
    }
}


// ReactDOM.render(<BasicExample/>, document.getElementById('main'));

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type='danger'>这一个很</Button>
                <RO></RO>
            </div>
        );
    }
}

export default App;
