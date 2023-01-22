import React from 'react'

export default function TextItem({text}) {
    
  return (
    
        <div className="left-items">
          <h3 className="text-title">{text.heading}</h3>
          <h2 className="text-heading">{text.subHeading}</h2>
          <p className="text-para">{text.description}</p>
        </div>
  )
}
