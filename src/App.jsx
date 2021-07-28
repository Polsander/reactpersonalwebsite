import React from 'react'

import Header from './components/Header/Header';
import BootstrapLayout from './UI/BootstrapLayout';
import Introduction from './components/Intro/Introduction';
import Projects from './components/Skills/Projects';

const App = () => {
  return (
    <React.Fragment>
      <BootstrapLayout>
        <Header />
        <Introduction />
        <Projects />
      </BootstrapLayout>
    </React.Fragment>
  )
}

export default App


