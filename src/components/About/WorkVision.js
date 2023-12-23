import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const WorkVision = () => {
  return (
    <div className='interest-1'>
    <TypeAnimation className='text'
  sequence={[
    '"Currently, I am on the lookout for an opportunity to bring my creativity and distinctive viewpoint to a forward-thinking company. I invite you to explore the various sections to gain a better understanding of who I am!',
    500,
  ]}
  style={{ fontSize: '1.3em' }}
  repeat={Infinity}
/>
</div>
  )
}

export default WorkVision