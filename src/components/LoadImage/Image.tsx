import React, { useState, useEffect } from 'react';

interface props{
    imagePath: string
    callback: Function
    alt: string
    width?: string
    height?: string
    className?: string
}

const LoadImage : React.FC<props>= (props) => {
    const [loaded, setLoaded] = useState(false);
  const {imagePath, callback} = props
  useEffect(() => {
    const image = new Image();
    image.src = imagePath;
    image.onload = () => {
      setLoaded(true);
      callback(true)
    };
  }, [imagePath, callback]);

  if (!loaded) {
    return null; 
  }
  return (
        <img src={props.imagePath} 
        alt={"props.alt"} width={props.width} 
        height={props.height}
        className={props.className}
        />
  )
}

export default LoadImage
