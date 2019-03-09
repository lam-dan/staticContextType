import React, { useEffect } from 'react';

import classes from './Cockpit.css';

//functional component can be wrapped with React memo to prevent rendering of child components
const cockpit = (props) => {

    //will run for every render cycle of the cockpit for every update
    // second argument for when you want this method to render, in this case, method only runs when props.person changes
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
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
                className={btnClass}
                onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

//wrapping in React memo so that it stores a snapshot of this component and only if its input changes, it will re-render it
export default React.memo(cockpit);