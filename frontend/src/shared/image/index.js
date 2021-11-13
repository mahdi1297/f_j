import React from "react";

const ImageContainer = ({
  src,
  alt,
  width,
  height,
  border,
  paddingClass,
  radiusClass,
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${border && border + "px"} ${
          paddingClass && paddingClass
        } ${radiusClass && radiusClass}`}
      />
    </>
  );
};

export default ImageContainer;
