import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router';

const withAuth = (Component) => {

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    }
    return false;
  };

  return class extends React.Component {
    render() {
      if (isAuthenticated()) {
        return <Component {...this.props} />;
      } else {
        return <Navigate to='/' />;
      }
    }
  };
};

export default withAuth;