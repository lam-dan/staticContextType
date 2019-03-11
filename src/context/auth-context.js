import React from 'react';

//creates globally available javascript object that can be passed without using props of your choosing
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;