import React from 'react'
import { Toolbar } from '../../components/navigation/toolbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <div >
        {children}
      </div>
    </div>
  )
}

export default Layout