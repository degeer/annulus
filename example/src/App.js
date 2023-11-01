import React from 'react'

import WhitespaceLogo from './WhitespaceLogo'
import WhitespaceLogoOptimize from './WhitespaceLogoOptimize'
import Optimize from './Optimize'

import Examples from './Examples'
import Variants from './Variants'
import Variants2 from './Variants2'

const App = () => {
  return (
    <>
      {/* <Optimize dots={true} lines={true} /> */}
      {/* <WhitespaceLogo dots={true} /> */}
      {/* <WhitespaceLogo dots={false} /> */}
      <WhitespaceLogoOptimize dots={false} lines={false} />
      {/* <WhitespaceLogo dots={true} />
      <WhitespaceLogo dots={true} dotDistance={1 / 48} />
      <WhitespaceLogo dots={true} dotDistance={1 / 96} />
      <WhitespaceLogo dots={true} dotDistance={1 / 192} /> */}
      {/* <WhitespaceLogo dots={true} dotDistance={1 / 384} /> */}
      {/* <Variants2 /> */}
      {/* <Examples /> */}
    </>
  )
}

export default App
