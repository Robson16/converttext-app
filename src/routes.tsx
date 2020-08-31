import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ConvertText from './pages/ConvertText';

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={ConvertText} />
        </BrowserRouter>
    );
}

export default Routes;