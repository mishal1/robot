const input = require('./input');
const planet = require('./planet');
const robot = require('./robot');
const _ = require('lodash');

const formatResults = (output) => {
  const lost = output.lost ? ' LOST' : '';
  return `${output.xCoordinate} ${output.yCoordinate} ${output.orientation}${lost}`;
};

const endResults = results => _.join(_.map(results, formatResults), '\n');

const main = (inputData) => {
  const data = input.formatInputData(inputData);
  const bounds = planet.size(data.bounds);
  const moves = robot.runInstructions(data.instructions, bounds, [], []);
  const output = endResults(moves);
  return output;
};

module.exports = {
  main,
};
