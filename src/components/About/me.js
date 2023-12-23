import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const me = () => {
  return (
  
    <div className='interest-1'>
      <TypeAnimation className='text'
  sequence={[
    'My name is Tomas Ninno, and I am 30 years old. Currently, I am seeking my first opportunity as a web developer.',
    500,
  ]}
  style={{ fontSize: '1.5em' }}
  repeat={Infinity}
/>
</div>
    
  )
}
export default me