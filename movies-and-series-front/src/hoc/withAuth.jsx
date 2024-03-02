import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const withAuth = (Component) => {

  const isAuthenticated = () => {

    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000

    if (decodedToken.exp > currentTime) {
      return true;
    } 

    return false;
  };


  return class extends React.Component {
    render() {
      if (isAuthenticated) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };
};

export default withAuth;