import React from 'react';

import Nanbar from './Navbar'
import Footer from  './Footer'

const Layout: React.FC = (props: any) => {
  return (
      <React.Fragment>
          <Nanbar />
          { props.children }
          <Footer />
      </React.Fragment>
  )
}

export default Layout;
