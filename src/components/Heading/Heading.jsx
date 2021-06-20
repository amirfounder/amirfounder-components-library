import React from 'react';
import './Heading.css'
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6
} from './HeadingStyles';

/**
 * @name Heading
 * @description Renderes a Heading componenet.
 * @param {*} Props children, level, backgroundImage, size, weight
 * @returns Component
 */
export const Heading = ({
  onClick,
  color,
  children,
  level,
  backgroundImage,
  backgroundRepeat,
  backgroundSize,
  size,
  weight
}) => {

  switch(Number(level)) {
    case 1:
      return(
        <HeadingH1
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH1>
      )
    case 2:
      return(
        <HeadingH2
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH2>
      )
    case 3:
      return(
        <HeadingH3
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH3>
      )
    case 4:
      return(
        <HeadingH4
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH4>
      )
    case 5:
      return(
        <HeadingH5
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH5>
      )
    case 6:
      return(
        <HeadingH6
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH6>
      )
    default:
      return(    
        <HeadingH2
          backgroundImage={backgroundImage}
          backgroundRepeat={backgroundRepeat}
          backgroundSize={backgroundSize}
          className='heading'
          color={color}
          onClick={onClick}
          size={size}
          weight={weight}
        >
          {children}
        </HeadingH2>
      )
  }

  // return(
  //   <>
  //     {
  //       !level ? <h2
  //         className={`
  //           heading heading-2
  //           ${backgroundImage && 'heading-background-image'}
  //         `}
  //         style={{
  //           color: 'black',
  //           background: `url(${backgroundImage ? background : null}) no-repeat`,
  //           WebkitTextFillColor: `${backgroundImage && 'transparent'}`,
  //           backgroundClip: `${backgroundImage && 'text'}`,
  //           WebkitBackgroundClip: `${backgroundImage && 'text'}`,
  //         }}
          
  //       >
  //         {children}
  //       </h2> :
  //       level.toLowerCase() == '1' ? <h1
  //         className={`
  //           heading heading-1
  //           ${backgroundImage && 'heading-background-image'}
  //         `}
  //         style={{
  //           fontSize: `${size && size}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h1> :
  //       level.toLowerCase() == '2' ? <h2
  //         className={`
  //           heading heading-2
  //           ${backgroundImage && 'heading-background-image'}
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h2> :
  //       level.toLowerCase() == '3' ? <h3
  //         className={`
  //           heading heading-3
  //           ${backgroundImage && 'heading-background-image'}
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h3> :
  //       level.toLowerCase() == '4' ? <h4
  //         className={`
  //           heading heading-4
  //           ${backgroundImage && 'heading-background-image'}
  //           backgr
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h4> :
  //       level.toLowerCase() == '5' ? <h5
  //         className={`
  //           heading heading-5
  //           ${backgroundImage && 'heading-background-image'}
  //           backgr
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h5> :
  //       level.toLowerCase() == '6' ? <h6
  //         className={`
  //           heading heading-6
  //           ${backgroundImage && 'heading-background-image'}
  //           backgr
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h6> :
  //       <h2
  //         className={`
  //           heading heading-2
  //           ${backgroundImage && 'heading-background-image'}
  //           backgr
  //         `}
  //         style={{
  //           fontSize: `${size && size.toLowerCase()}`,
  //           fontWeight: `${weight && weight}`,
  //         }}
  //       >
  //         {children}
  //       </h2>
  //     }
  //   </>
  // )
}