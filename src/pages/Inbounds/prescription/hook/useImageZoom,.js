import { useState } from "react";

export default function useImageZoom() {
  const maxZoomLevel = 500;
  const maxZoomNumber = 400;
  const minZoomLevel = 100;
  const defaultZoomLevel = 200;
  const defaultZoomNumber = 100;
  const minZoomNumber = 0;
  const [zoomLevel, setZoomLevel] = useState(defaultZoomLevel);
  const [zoomNumber, setZoomNumber] = useState(defaultZoomNumber);
  let zoomwidth = 60 + zoomLevel;

  //   const zoomPercentage =

  function zoomIn() {
    setZoomLevel((zoomLevel) =>
      zoomLevel < maxZoomLevel ? zoomLevel + 10 : zoomLevel
    );

    setZoomNumber((zoomNumber) =>
      zoomNumber < maxZoomNumber ? zoomNumber + 10 : zoomNumber
    );
  }

  function zoomOut() {
    setZoomLevel((zoomLevel) =>
      zoomLevel > minZoomLevel ? zoomLevel - 10 : minZoomLevel
    );

    setZoomNumber((zoomNumber) =>
      zoomNumber > minZoomNumber ? zoomNumber - 10 : minZoomNumber
    );
  }

  function resetZoom() {
    setZoomLevel(defaultZoomLevel);
    setZoomNumber(defaultZoomNumber);
  }

  const zoomStyles = {
    // transform: `scale(${zoomLevel})`,
    height: "!auto",
    width: `${zoomwidth}px`,
  };

  const handlers = {
    zoomIn,
    zoomOut,
    resetZoom,
    zoomNumber,
  };

  return [zoomStyles, handlers];
}
