import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { Landing } from './pages/landing.page';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Landing />
        </>
    );
};

export default App;
