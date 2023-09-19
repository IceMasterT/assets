const satellite = require('satellite.js');

const tleLine1 = "1 53299U 22087A 23218.18316834 .00013476 00000-0 47310-3 0 9996";
const tleLine2 = "2 53299 97.3648 292.2302 0012899 47.2670 312.9654 15.29451076 57138";

// Initialize a satellite record from the TLE lines.
const satrec = satellite.twoline2satrec(tleLine1, tleLine2);

const date = new Date();

// Propagate satellite using time since epoch.
const positionAndVelocity = satellite.propagate(satrec, date);

// Extract position and velocity vectors from the result.
const positionEci = positionAndVelocity.position;
const velocityEci = positionAndVelocity.velocity;

console.log("Position:", positionEci);
console.log("Velocity:", velocityEci);

// Log the satellite's position at the given time
console.log("Satellite's Position at the given time:");
console.log(`X: ${positionEci.x}`);
console.log(`Y: ${positionEci.y}`);
console.log(`Z: ${positionEci.z}`);
