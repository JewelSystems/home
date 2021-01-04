import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import Who from './pages/Who';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={ Home } />
            <Route path="/who" component={ Who } />
            <Route path="/solutions" component={ Solutions } />
            <Route path="/contact" component={ Contact } />
        </BrowserRouter>
    );
}