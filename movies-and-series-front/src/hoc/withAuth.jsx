import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router';

const withAuth = (Component) => {

  const isAuthenticated = () => {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
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
        return <Navigate to="/login" />;
      }
    }
  };
};

export default withAuth;