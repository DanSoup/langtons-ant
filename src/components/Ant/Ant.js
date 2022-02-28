import React, { useEffect, useRef, useState } from 'react';
import './Ant.scss';
import calculateAnt from './calculateAnt';
import AntAutomata from './AntAutomata';

const pctToHex = (pct) => {
  if (isNaN(pct)) return '00';
  return Math.floor(Math.min(pct * 256, 255)).toString(16).padStart(2, '0');
};

function Ant() {
  const canvas = useRef(null);
  const [sAntData, uAntData] = useState(new AntAutomata());
  const [sToggle, uToggle] = useState(0);

  useEffect(() => {
    if (sToggle === 0) canvas.current.height = 800;
    if (sToggle === 0) canvas.current.width = 800;
    const ctx = canvas.current.getContext('2d');
    sAntData.draw(ctx);
    sAntData.step(1);

    // ctx.fillRect(Math.random() * 800, Math.random() * 800, 50, 50);

    setTimeout(() => uToggle(sToggle+1), 0);
  });

  return <div id="ant" className="page">
      {/* Control Menu */}
      <div>
        <table>
          <thead>
            <tr>
              <th>STATE</th>
              <th>TURN</th>
              <th>DISTANCE</th>
              <th>COLOUR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>R</td>
              <td>1</td>
              <td>#000000</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div>X: {sAntData.ant.x}, Y: {sAntData.ant.y}, D: {sAntData.ant.d}</div> */}

      {/* Canvas */}
      <div>
        <canvas ref={canvas}></canvas>
      </div>

      {/* Export Menu */}
      <div></div>
  </div>;
};

export default Ant;