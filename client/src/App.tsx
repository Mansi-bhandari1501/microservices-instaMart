import React from 'react';

import './App.css';
// import SidebarLayout from './layouts/';
import { useRoutes } from 'react-router';
import routes from './routes';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      {content}
    </>
  );
}

export default App;