import React from 'react';
import { Route, Link } from 'react-router-dom';

const ToggleLink = props => {

    return (
        <Route  path={props.to} 
                exact={props.exact}
                children={ routeProps => {
                        const baseClasses = props.className || 'm-2 btn btn-block';
                        const activeClass = props.activeClass || 'btn-primary';
                        const inactiveClass = props.inactiveClass || 'btn-secondary';
                        const combinedClasses = `${baseClasses} ${routeProps.match ? activeClass : inactiveClass}`;

                        return <Link to={props.to} className={combinedClasses}>
                            {props.children}
                        </Link>
                    }
                }></Route>
    );
};  

export default ToggleLink;