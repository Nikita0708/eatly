import React from 'react';
import { Main } from 'components/Main';
import { Header } from './Header';
import { Footer } from './Footer';

import '../css/index.css';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};
