import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

//functional component can be wrapped with React memo to prevent rendering of child components
const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    //will run after every render cycle of the cockpit for every update
    // second argument for when you want this method to render, in this case, method only runs when props.person changes
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };

    }, [props.persons]);

    useEffect(() => {

        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Person
            </button>
            <button onClick={authContext.login}>Log in</button>

        </div>
    );
};

//wrapping in React memo so that it stores a snapshot of this component and only if its input changes, it will re-render it
export default React.memo(cockpit);