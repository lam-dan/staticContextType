//React's Pure Compoment makes it so that it will not render component unless there are changes to it, like a input length, click, etc 
import React, { PureComponent } from 'react';
import Person from './Person/Person';

//class based component - if statement on shouldComponentUpdate to prevent re-rendering unless changes happen
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps',props);
  // }

  //whenever this component gets re-rendered then we update

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Person.js] shouldComponentUpdate');

  //   //if the person's prop doesn't change, do not render
  //   //if changes happen as in it's not equal to each other, then re-render the page
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate(){
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Person.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  };
}

export default Persons;