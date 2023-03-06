import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Not Found</h2>
      <Link replace to={'/'}>
        Etusivu
      </Link>
    </>
  );
};

export default NotFoundPage;
