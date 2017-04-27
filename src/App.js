import React, { Component } from 'react';
// import './App.css';
import Footer from './Footer';
import PagesNavigation from './PagesNavigation';
import SellInput from './SellInput';
import SellInputStep2 from './SellInputStep2';
import SellInputStep3 from './SellInputStep3';
import Login from './login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PagesNavigation />
                <Login />
                <Footer />
            </div>
        );
    }
}

export default App;
