import React from 'react';
import { Redirect,Route } from 'react-router-dom';

const Authorized = ({ component:ComposedComponent,...rest}) => {
    return(
        <Route { ...rest } render={props => {
            return localStorage.getItem('flag') ? (<ComposedComponent  { ...props } />) : (<Redirect to="/login" />)
        }} />
    )
}

export default Authorized;