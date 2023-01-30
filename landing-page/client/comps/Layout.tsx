import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({children}) => {

    // const { children } = props;

  return (
    <div>
        <Navigation />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;