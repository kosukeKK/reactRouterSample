import * as React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Hoge from '../components/Hoge';
import Geho from '../components/Geho';

const App = () => (
    <BrowserRouter>
        <div>
            <li><Link to='/'>Hoge</Link></li>
            <li><Link to='/geho'>Geho</Link></li>
            <Route exact path='/' component={Hoge} />
            <Route path='/geho' component={Geho} />
        </div>
    </BrowserRouter>
);

export default connect()(App);
