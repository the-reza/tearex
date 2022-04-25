import React from 'react'
import './style.css'
import '../../bg.jpg'

function Example(props) {
      return (
            <a href={props.link}>
                  <div className='body-ex' style={{
                        backgroundImage:
                              `url(${props.img})`,
                  }}>
                        <div className="circle">View Project</div>
                  </div>
            </a >
      )
}


export default Example