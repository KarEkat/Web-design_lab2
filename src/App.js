import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Vocab from './components/VocabComponent'
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import { DICTIONARY } from './shared/dictionary'
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Test from './components/TestComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { addComment } from '../redux/ActionCreators';

// const store = ConfigureStore();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: DICTIONARY
        };
    }
    render() {
        const TestPage = () => {
            return (
                <Test />
            );
        }

        return (

            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route path='/Test' component={TestPage} />
                        <Route exact path='/Vocab' component={() => <Vocab words={this.state.words} />} />
                        <Redirect to="/Test" />
                    </Switch>


                </div>
            </BrowserRouter>

        );
    }
}

export default App;