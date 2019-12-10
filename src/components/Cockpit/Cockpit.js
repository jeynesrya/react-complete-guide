import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    // only runs the first time - mount
    useEffect(() => {
      console.log('[Cockput.js] useEffect');
      // Http request...
      // setTimeout(() => {
      //   alert('Saved data to cloud start!');
      // }, 1000);
      toggleBtnRef.current.click();
      // unmount
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

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
              {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

// React.memo used for functional components
export default React.memo(Cockpit);