import React, { useEffect, useRef, useState } from 'react';
import './Ant.scss';

const pctToHex = (pct) => {
  if (isNaN(pct)) return '00';
  return Math.floor(Math.min(pct * 256, 255)).toString(16).padStart(2, '0');
};

function Ant() {
  const canvas = useRef(null);
  const [sAntData, uAntData] = useState({ant: {x: 200, y: 200, d: 0}, area: [[]]});

  useEffect(() => {
    canvas.current.height = 800;
    canvas.current.width = 800;
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, 800, 800);
    sAntData.area.forEach((row, ay) => {
      if (row) {
        row.forEach((cell, ax) => {
          const n = (cell < 1) ? cell / 3 : 1 - ((2 - cell) / 3);
          if (typeof cell === 'number') {
            ctx.fillStyle = `#${pctToHex(n)}${pctToHex(n)}${pctToHex(n)}`;
            ctx.fillRect(ax*2, ay*2, 2, 2);
          }
        });
      }
    });

    ctx.fillStyle = '#ff0000';
    ctx.fillRect(sAntData.ant.x*2, sAntData.ant.y*2, 2, 2);

    const newAntArea = [...sAntData.area.map(row => row ? [...row] : [])];
    const newAnt = {...sAntData.ant};

    if (!newAntArea[sAntData.ant.y]) newAntArea[sAntData.ant.y] = [];
    if (Math.floor(newAntArea[sAntData.ant.y][sAntData.ant.x]) === 1) newAnt.d = (newAnt.d + 1) % 4
    else newAnt.d = (newAnt.d + 3) % 4;

    if (newAnt.d === 0) newAnt.y--;
    if (newAnt.d === 1) newAnt.x++;
    if (newAnt.d === 2) newAnt.y++;
    if (newAnt.d === 3) newAnt.x--;

    newAntArea[sAntData.ant.y][sAntData.ant.x] = (!newAntArea[sAntData.ant.y][sAntData.ant.x]) ? (1) : (newAntArea[sAntData.ant.y][sAntData.ant.x] + (1)) % 2;

    setTimeout(() => uAntData({...sAntData, ant: newAnt, area: newAntArea}), 0);
  });

  return <div id="ant" className="page">
    {/* Main Body */}
    <div id="main-body">

      {/* Control Menu */}
      <div>X: {sAntData.ant.x}, Y: {sAntData.ant.y}, D: {sAntData.ant.d}</div>

      {/* Canvas */}
      <div>
        <canvas ref={canvas}></canvas>
      </div>

      {/* Export Menu */}
      <div></div>
    </div>
  </div>;
};

export default Ant;