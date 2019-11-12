import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    // only runs the first time
    useEffect(() => {
      console.log('[Cockput.js] useEffect');
      // Http request...
      setTimeout(() => {
        alert('Saved data to cloud start!');
      }, 1000);
      return () => {
        //runs before main useEffect function but after the (first) render cycle
        console.log('[Cockpit.js] cleanup work in useEffect')
      }
    }, []);

    // only execute when persons changed; can have multiple useEffect
    // useEffect(() => {
    //   console.log('[Cockput.js] useEffect');
    //   // Http request...
    //   setTimeout(() => {
    //     alert('Saved data to cloud!');
    //   }, 1000);
    // }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        // change style dynamically
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;