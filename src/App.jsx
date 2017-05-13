import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
    }
}

export default App;