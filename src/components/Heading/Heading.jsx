import React, { useEffect } from 'react';
import './Heading.css'

/**
 * @name Heading
 * @description Renderes a Heading componenet.
 * @param {*} Props children, level, backgroundImage, size, weight
 * @returns Component
 */
export const Heading = ({
  children,
  level,
  backgroundImage,
  size,
  weight
}) => {

  useEffect(() => {
    backgroundImage &&
    document.documentElement.style.setProperty('--heading-backgroundImage', `url(${backgroundImage})`)
  })

  return(
    <>
      {
        !level ? <h2
          className={`
            heading heading-2
            ${backgroundImage && 'heading-background-image'}
          `}
          style={{
            color: 'black',
            background: `url(${backgroundImage ? background : null}) no-repeat`,
            WebkitTextFillColor: `${backgroundImage && 'transparent'}`,
            backgroundClip: `${backgroundImage && 'text'}`,
            WebkitBackgroundClip: `${backgroundImage && 'text'}`,
          }}
          
        >
          {children}
        </h2> :
        level.toLowerCase() == '1' ? <h1
          className={`
            heading heading-1
            ${backgroundImage && 'heading-background-image'}
          `}
          style={{
            fontSize: `${size && size}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h1> :
        level.toLowerCase() == '2' ? <h2
          className={`
            heading heading-2
            ${backgroundImage && 'heading-background-image'}
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h2> :
        level.toLowerCase() == '3' ? <h3
          className={`
            heading heading-3
            ${backgroundImage && 'heading-background-image'}
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h3> :
        level.toLowerCase() == '4' ? <h4
          className={`
            heading heading-4
            ${backgroundImage && 'heading-background-image'}
            backgr
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h4> :
        level.toLowerCase() == '5' ? <h5
          className={`
            heading heading-5
            ${backgroundImage && 'heading-background-image'}
            backgr
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h5> :
        level.toLowerCase() == '6' ? <h6
          className={`
            heading heading-6
            ${backgroundImage && 'heading-background-image'}
            backgr
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h6> :
        <h2
          className={`
            heading heading-2
            ${backgroundImage && 'heading-background-image'}
            backgr
          `}
          style={{
            fontSize: `${size && size.toLowerCase()}`,
            fontWeight: `${weight && weight}`,
          }}
        >
          {children}
        </h2>
      }
    </>
  )
}