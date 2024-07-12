import React from 'react'
import { StretchableFlexContainer } from './patterns/StretchableFlexContainer'
import { InlineFlexContainer } from './patterns/InlineFlexContainer'

const Header = () => {
  return (
    <>
    <StretchableFlexContainer stretch={1} align="center" switchAt="40rem">
        <div>
       logo
        </div>
        <InlineFlexContainer gap="m" justify="center" align="center">
          <span>About</span>
          <span>Gallery</span>
          <span>Events</span>
          <span>Contact</span>
        </InlineFlexContainer >
        <StretchableFlexContainer gap="m" align="center" justify="end">
          <span>Info</span>
          <button>Sign In</button>
        </StretchableFlexContainer>
      </StretchableFlexContainer>
    </>
  )
}

export default Header