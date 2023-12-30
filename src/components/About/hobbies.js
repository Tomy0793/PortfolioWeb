import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const hobbies = () => {
  return (
    <div className='interest-1'>
    <TypeAnimation className='text'
  sequence={[
    'My hobbies are as follows:',
    500,
    '*Playing the guitar. \n *Drawing.\n *Nature.\n *Playing video games.',
    500,

  ]}
  style={{ fontSize: '1.5em', whiteSpace:'pre-line' }}
  repeat={0}
  speed={20}
/>
</div>
  )
}

export default hobbies