import React from 'react';

function Devlog() {
  return <div className="page">
    <div>
      <p>22/02/2022</p>
      <p>Issues with the pathing. Should probably learn Webpack instead of just constantly smashing my head against it until it works. I should push and make sure it works. Need to remember to copy the changes over to the base react project.</p>

      <p>THE ANT WALKS! I wanted to get the classic ant working before I pushed again and there it goes. Been thinking a lot about the ant and ways to change it. Hopefully I'll be able to implement these in a way that the end user will have unprecedented control over the ant eventually. Some ideas:</p>
      <ul>
        <li>Ant state (belive this would technically make it a turmite? Must research)</li>
        <li>Non-integer state. So after briefly testing I realized that any non-integer change can just be translated to a system with a larger number of rules, eg RL with 0.5 increments become RLLR. I had the bright idea of incrementing by an irrational amount to simulate an infinite ruleset but I'd need to calculate the irrational number to a more and more precise degree each time so cheat it really being irrational. Interestingly an RL system that increments by Math.PI % 1 creates a highway after not long. I'll have to calculate the integer rule for this at some point.</li>
        <li>Make this devlog not look awful.</li>
      </ul>
    </div>
  </div>;
};

export default Devlog;