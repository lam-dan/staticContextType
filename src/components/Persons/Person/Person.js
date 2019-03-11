import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    //constructors require you call super method always
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    //Static property means it can be accessed from outside without the need to instantiate an object based
    //on this class first
    static contextType = AuthContext;


    componentDidMount() {
        //finds first input box and puts cursor on it
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);

    }


    render() {
        console.log('[Person.js] rendering...');
        return (
            //check if this.prop.isAuth is true, output Authenticated! otherwise output Please Log In!
            <Aux>
                {this.context.authenticated ? (
                    <p>Authenticated!</p>
                ) : (
                    <p>Please log in</p>
                )}
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //older approach
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);