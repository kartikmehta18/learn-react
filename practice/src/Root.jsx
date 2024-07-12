import React from 'react'

import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { Foot } from './Foot'

function Root() {
  return (
    <>
      <Nav/>
        <Outlet />
      <Foot/>
    </>
  )
}

export default Root