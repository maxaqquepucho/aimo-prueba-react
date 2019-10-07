import React from 'react';

import Nanbar from './Navbar'


const Layout: React.FC = (props: any) => {
  return (
      <React.Fragment>
          <Nanbar />
          { props.children }
         
      </React.Fragment>
  )
}

export default Layout;
