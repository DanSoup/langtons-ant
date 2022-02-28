const defaultAntData = {
  x: 400,
  y: 400,
  d: 0,
  s: 0
};
const defaultRules = [
  {
    t: 1,
    color: '#000000'
  },
  {
    t: 3,
    color: '#800000'
  }
];

class AntAutomata {
  constructor (antData = defaultAntData, rules = defaultRules) {
    this.area = [];
    this.ant = antData;
    this.rules = rules;
    this.tilesToDraw = [];
  }

  coordToIndex (c) {
    return c <= 0 ? c * -2 : c * 2 + 1;
  };

  indexToCoord (i) {
    return i % 2 === 0 ? i * -0.5 : (i-1) * 0.5;
  }

  getTile (x, y) {
    if (typeof this.area[this.coordToIndex(y)] === 'undefined') {
      this.area[this.coordToIndex(y)] = [];
    };

    const row = this.area[this.coordToIndex(y)];

    if (typeof row[this.coordToIndex(x)] === 'undefined') {
      row[this.coordToIndex(x)] = 0;
    };

    return row[this.coordToIndex(x)];
  };

  setTile (x, y, v) {
    if (typeof this.area[this.coordToIndex(y)] === 'undefined') {
      this.area[this.coordToIndex(y)] = [];
    };

    const row = this.area[this.coordToIndex(y)];

    if (typeof row[this.coordToIndex(x)] === 'undefined') {
      row[this.coordToIndex(x)] = 0;
    };

    return row[this.coordToIndex(x)] = v;
  }

  step (n = 1) {
    for (let i = 0; i < n; i++) {
      // change tile state
      const tileState = this.getTile(this.ant.x, this.ant.y)
      this.setTile(this.ant.x, this.ant.y, tileState + 1);
      this.tilesToDraw.push([this.ant.x, this.ant.y]);

      this.ant.d = (this.ant.d + this.rules[tileState % this.rules.length].t) % 4;

      if (this.ant.d === 0) this.ant.y--;
      if (this.ant.d === 1) this.ant.x++;
      if (this.ant.d === 2) this.ant.y++;
      if (this.ant.d === 3) this.ant.x--;
    }
  };

  draw (ctx) {
    this.tilesToDraw.forEach(([x, y]) => {
      ctx.fillStyle = this.rules[this.getTile(x, y) % this.rules.length].color;
      ctx.fillRect(y, x, 1, 1);
    });
    this.tilesToDraw = [];
  };
};

export default AntAutomata;