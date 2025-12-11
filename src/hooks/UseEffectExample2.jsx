import React, { useState } from "react";
import MapExample from "./MapExample.jsx";

const UseEffectExample2 = () => {
  const [zoomLevel, setZoomLevel] = useState(4);

  return (
    <div>
      <h3>Zoom Level: {zoomLevel}x</h3>

      {/* <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button> */}

      <hr />

      <MapExample zoomLevel={zoomLevel} />
    </div>
  );
};

export default UseEffectExample2;
