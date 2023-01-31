import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({children}) => {

  return (
    <div style={{'backgroundColor': '#008080', 'height': '100vh'}}>
        <Navigation />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;