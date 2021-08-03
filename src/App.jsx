import React from 'react'

import Header from './components/Header/Header';
import BootstrapLayout from './UI/BootstrapLayout';
import Introduction from './components/Intro/Introduction';
import Projects from './components/Skills/Projects';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <BootstrapLayout>
        <Header />
        <Introduction />
        <Projects />
        <Experience />
        <Footer/>
      </BootstrapLayout>
    </React.Fragment>
  )
}

export default App


