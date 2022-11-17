import React, { useState } from 'react';
import Nav from './Nav';
import Header from './pages/Header'
import Footer from './pages/Footer'
import About from './pages/About';
import Work from './pages/Work';

export default function Portfolio() {
  const [Page, setPage] = useState('aboutMe');

  const render = () => {
    if (Page === 'aboutMe') {
      return <About />;
    }
    if (Page === 'myWork') {
      return <Work />;
    }
  };

  const handleSetPage = (page) => setPage(page);

  return (
    <div>
      
      <Header/>
      <Nav Page={Page} handleSetPage={handleSetPage} />
      {render()}
      <Footer/>

    </div>
  );
}
